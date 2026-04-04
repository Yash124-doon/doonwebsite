const { pool } = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../middleware/auth');

/**
 * Register a new admin (API only — no frontend page)
 * POST /api/admin/register
 */
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and password are required.',
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 6 characters.',
      });
    }

    // Check if admin already exists
    const [existing] = await pool.execute(
      'SELECT id FROM admin_users WHERE email = ?',
      [email.toLowerCase()]
    );

    if (existing.length > 0) {
      return res.status(409).json({
        success: false,
        message: 'Admin with this email already exists.',
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert admin
    const [result] = await pool.execute(
      'INSERT INTO admin_users (name, email, password) VALUES (?, ?, ?)',
      [name.trim(), email.toLowerCase().trim(), hashedPassword]
    );

    return res.status(201).json({
      success: true,
      message: 'Admin registered successfully.',
      data: {
        id: result.insertId,
        name: name.trim(),
        email: email.toLowerCase().trim(),
      },
    });
  } catch (error) {
    console.error('Error registering admin:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Login admin
 * POST /api/admin/login
 */
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required.',
      });
    }

    // Find admin
    const [rows] = await pool.execute(
      'SELECT * FROM admin_users WHERE email = ?',
      [email.toLowerCase().trim()]
    );

    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    const admin = rows[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: admin.id, name: admin.name, email: admin.email },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Update last login
    await pool.execute(
      'UPDATE admin_users SET last_login = NOW() WHERE id = ?',
      [admin.id]
    );

    return res.status(200).json({
      success: true,
      message: 'Login successful.',
      data: {
        token,
        admin: {
          id: admin.id,
          name: admin.name,
          email: admin.email,
        },
      },
    });
  } catch (error) {
    console.error('Error logging in admin:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Get admin profile
 * GET /api/admin/profile
 */
const getAdminProfile = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT id, name, email, created_at, last_login FROM admin_users WHERE id = ?',
      [req.admin.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Admin not found.' });
    }

    return res.status(200).json({ success: true, data: rows[0] });
  } catch (error) {
    console.error('Error fetching admin profile:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

/**
 * Get dashboard statistics
 * GET /api/admin/dashboard
 */
const getDashboardStats = async (req, res) => {
  try {
    // Total admission leads
    const [totalLeads] = await pool.execute(
      'SELECT COUNT(*) as total FROM admission_leads'
    );

    // Today's leads
    const [todayLeads] = await pool.execute(
      'SELECT COUNT(*) as total FROM admission_leads WHERE DATE(created_at) = CURDATE()'
    );

    // This week's leads
    const [weekLeads] = await pool.execute(
      'SELECT COUNT(*) as total FROM admission_leads WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)'
    );

    // This month's leads
    const [monthLeads] = await pool.execute(
      'SELECT COUNT(*) as total FROM admission_leads WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)'
    );

    // Recent 5 leads
    const [recentLeads] = await pool.execute(
      'SELECT * FROM admission_leads ORDER BY created_at DESC LIMIT 5'
    );

    // Leads by class
    const [leadsByClass] = await pool.execute(
      'SELECT class_applied, COUNT(*) as count FROM admission_leads WHERE class_applied IS NOT NULL GROUP BY class_applied ORDER BY count DESC'
    );

    // Daily leads for last 7 days
    const [dailyTrend] = await pool.execute(
      `SELECT DATE(created_at) as date, COUNT(*) as count 
       FROM admission_leads 
       WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) 
       GROUP BY DATE(created_at) ORDER BY date ASC`
    );

    return res.status(200).json({
      success: true,
      data: {
        stats: {
          total: totalLeads[0].total,
          today: todayLeads[0].total,
          thisWeek: weekLeads[0].total,
          thisMonth: monthLeads[0].total,
        },
        recentLeads,
        leadsByClass,
        dailyTrend,
      },
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

/**
 * Get all admission leads with pagination, search, and filters
 * GET /api/admin/leads
 */
const getAdminLeads = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';
    const classFilter = req.query.class || '';
    const sortBy = req.query.sortBy || 'created_at';
    const sortOrder = req.query.sortOrder === 'asc' ? 'ASC' : 'DESC';

    let whereClause = '1=1';
    const params = [];

    if (search) {
      whereClause += ' AND (student_name LIKE ? OR parent_name LIKE ? OR phone LIKE ?)';
      params.push(`%${search}%`, `%${search}%`, `%${search}%`);
    }

    if (classFilter) {
      whereClause += ' AND class_applied = ?';
      params.push(classFilter);
    }

    // Validate sortBy to prevent SQL injection
    const allowedSorts = ['created_at', 'student_name', 'phone', 'class_applied'];
    const safeSortBy = allowedSorts.includes(sortBy) ? sortBy : 'created_at';

    // Get total count
    const [countResult] = await pool.execute(
      `SELECT COUNT(*) as total FROM admission_leads WHERE ${whereClause}`,
      params
    );

    // Get paginated results
    const [rows] = await pool.execute(
      `SELECT * FROM admission_leads WHERE ${whereClause} ORDER BY ${safeSortBy} ${sortOrder} LIMIT ${limit} OFFSET ${offset}`,
      params
    );

    return res.status(200).json({
      success: true,
      data: rows,
      pagination: {
        total: countResult[0].total,
        page,
        limit,
        totalPages: Math.ceil(countResult[0].total / limit),
      },
    });
  } catch (error) {
    console.error('Error fetching admin leads:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

/**
 * Delete an admission lead
 * DELETE /api/admin/leads/:id
 */
const deleteAdmissionLead = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await pool.execute(
      'DELETE FROM admission_leads WHERE id = ?',
      [id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Lead not found.' });
    }

    return res.status(200).json({ success: true, message: 'Lead deleted successfully.' });
  } catch (error) {
    console.error('Error deleting lead:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error.' });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  getDashboardStats,
  getAdminLeads,
  deleteAdmissionLead,
};
