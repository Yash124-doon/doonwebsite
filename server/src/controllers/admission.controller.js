const { pool } = require('../config/db');

/**
 * Submit a new admission lead
 * POST /api/admission
 */
const submitAdmissionLead = async (req, res) => {
  try {
    const { student_name, parent_name, phone, class_applied, message } = req.body;

    const query = `
      INSERT INTO admission_leads (student_name, parent_name, phone, class_applied, message)
      VALUES (?, ?, ?, ?, ?)
    `;

    const [result] = await pool.execute(query, [
      student_name,
      parent_name || null,
      phone,
      class_applied || null,
      message || null,
    ]);

    return res.status(201).json({
      success: true,
      message: 'Admission lead submitted successfully',
      data: {
        id: result.insertId,
        student_name,
        parent_name: parent_name || null,
        phone,
        class_applied: class_applied || null,
        message: message || null,
      },
    });
  } catch (error) {
    console.error('Error submitting admission lead:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
};

/**
 * Get all admission leads
 * GET /api/admission
 */
const getAllAdmissionLeads = async (req, res) => {
  try {
    const [rows] = await pool.execute(
      'SELECT * FROM admission_leads ORDER BY created_at DESC'
    );

    return res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error('Error fetching admission leads:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
};

/**
 * Get a single admission lead by ID
 * GET /api/admission/:id
 */
const getAdmissionLeadById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.execute(
      'SELECT * FROM admission_leads WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Admission lead not found',
      });
    }

    return res.status(200).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error('Error fetching admission lead:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error. Please try again later.',
    });
  }
};

module.exports = {
  submitAdmissionLead,
  getAllAdmissionLeads,
  getAdmissionLeadById,
};
