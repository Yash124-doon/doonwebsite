const { pool } = require('../config/db');
const path = require('path');
const fs = require('fs');

/**
 * Initialize blogs table in the database
 */
const initBlogsTable = async () => {
  try {
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        slug VARCHAR(255) NOT NULL UNIQUE,
        excerpt TEXT,
        content LONGTEXT NOT NULL,
        featured_image VARCHAR(500),
        meta_title VARCHAR(255),
        meta_description TEXT,
        meta_keywords VARCHAR(500),
        canonical_url VARCHAR(500),
        author VARCHAR(100) DEFAULT 'Admin',
        status ENUM('draft', 'published') DEFAULT 'published',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_slug (slug),
        INDEX idx_status (status),
        INDEX idx_created (created_at)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('✅ Blogs table initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing blogs table:', error.message);
  }
};

// Initialize on load
initBlogsTable();

/**
 * Generate URL-friendly slug from title
 */
const generateSlug = (title) => {
  return title
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
};

/**
 * Create a new blog post
 * POST /api/blogs
 */
const createBlog = async (req, res) => {
  try {
    const {
      title,
      excerpt,
      content,
      meta_title,
      meta_description,
      meta_keywords,
      canonical_url,
      author,
      status,
    } = req.body;

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: 'Title and content are required.',
      });
    }

    // Generate unique slug
    let slug = generateSlug(title);
    const [existingSlugs] = await pool.execute(
      'SELECT slug FROM blogs WHERE slug LIKE ?',
      [`${slug}%`]
    );

    if (existingSlugs.length > 0) {
      const slugSet = new Set(existingSlugs.map((r) => r.slug));
      let counter = 1;
      let newSlug = slug;
      while (slugSet.has(newSlug)) {
        newSlug = `${slug}-${counter}`;
        counter++;
      }
      slug = newSlug;
    }

    // Handle featured image
    let featured_image = null;
    if (req.file) {
      featured_image = `/uploads/blogs/${req.file.filename}`;
    }

    const [result] = await pool.execute(
      `INSERT INTO blogs (title, slug, excerpt, content, featured_image, meta_title, meta_description, meta_keywords, canonical_url, author, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title.trim(),
        slug,
        excerpt || null,
        content,
        featured_image,
        meta_title || title.trim(),
        meta_description || (excerpt ? excerpt.substring(0, 160) : null),
        meta_keywords || null,
        canonical_url || null,
        author || 'Admin',
        status || 'published',
      ]
    );

    return res.status(201).json({
      success: true,
      message: 'Blog post created successfully.',
      data: {
        id: result.insertId,
        slug,
      },
    });
  } catch (error) {
    console.error('Error creating blog:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Get all published blogs (public)
 * GET /api/blogs
 */
const getPublishedBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const offset = (page - 1) * limit;

    const [countResult] = await pool.execute(
      "SELECT COUNT(*) as total FROM blogs WHERE status = 'published'"
    );

    const [rows] = await pool.execute(
      `SELECT id, title, slug, excerpt, featured_image, author, meta_title, meta_description, meta_keywords, canonical_url, created_at, updated_at
       FROM blogs WHERE status = 'published'
       ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`
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
    console.error('Error fetching blogs:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Get single blog by slug (public)
 * GET /api/blogs/:slug
 */
const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const [rows] = await pool.execute(
      "SELECT * FROM blogs WHERE slug = ? AND status = 'published'",
      [slug]
    );

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error('Error fetching blog:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Get all blogs for admin (including drafts)
 * GET /api/blogs/admin/all
 */
const getAllBlogsAdmin = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const search = req.query.search || '';
    const statusFilter = req.query.status || '';

    let whereClause = '1=1';
    const params = [];

    if (search) {
      whereClause += ' AND (title LIKE ? OR excerpt LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    if (statusFilter) {
      whereClause += ' AND status = ?';
      params.push(statusFilter);
    }

    const [countResult] = await pool.execute(
      `SELECT COUNT(*) as total FROM blogs WHERE ${whereClause}`,
      params
    );

    const [rows] = await pool.execute(
      `SELECT * FROM blogs WHERE ${whereClause} ORDER BY created_at DESC LIMIT ${limit} OFFSET ${offset}`,
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
    console.error('Error fetching admin blogs:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Get single blog by ID for admin editing
 * GET /api/blogs/admin/:id
 */
const getBlogByIdAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.execute('SELECT * FROM blogs WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found.',
      });
    }

    return res.status(200).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error('Error fetching blog for edit:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Update a blog post
 * PUT /api/blogs/admin/:id
 */
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      excerpt,
      content,
      meta_title,
      meta_description,
      meta_keywords,
      canonical_url,
      author,
      status,
    } = req.body;

    // Check if blog exists
    const [existing] = await pool.execute('SELECT * FROM blogs WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found.',
      });
    }

    // Handle image update
    let featured_image = existing[0].featured_image;
    if (req.file) {
      // Delete old image if exists
      if (featured_image) {
        const oldImagePath = path.join(__dirname, '../../..', featured_image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      featured_image = `/uploads/blogs/${req.file.filename}`;
    }

    // Regenerate slug if title changed
    let slug = existing[0].slug;
    if (title && title.trim() !== existing[0].title) {
      slug = generateSlug(title);
      const [existingSlugs] = await pool.execute(
        'SELECT slug FROM blogs WHERE slug LIKE ? AND id != ?',
        [`${slug}%`, id]
      );
      if (existingSlugs.length > 0) {
        const slugSet = new Set(existingSlugs.map((r) => r.slug));
        let counter = 1;
        let newSlug = slug;
        while (slugSet.has(newSlug)) {
          newSlug = `${slug}-${counter}`;
          counter++;
        }
        slug = newSlug;
      }
    }

    await pool.execute(
      `UPDATE blogs SET 
        title = ?, slug = ?, excerpt = ?, content = ?, featured_image = ?,
        meta_title = ?, meta_description = ?, meta_keywords = ?, canonical_url = ?,
        author = ?, status = ?
       WHERE id = ?`,
      [
        (title || existing[0].title).trim(),
        slug,
        excerpt !== undefined ? excerpt : existing[0].excerpt,
        content || existing[0].content,
        featured_image,
        meta_title || existing[0].meta_title,
        meta_description !== undefined ? meta_description : existing[0].meta_description,
        meta_keywords !== undefined ? meta_keywords : existing[0].meta_keywords,
        canonical_url !== undefined ? canonical_url : existing[0].canonical_url,
        author || existing[0].author,
        status || existing[0].status,
        id,
      ]
    );

    return res.status(200).json({
      success: true,
      message: 'Blog post updated successfully.',
      data: { id: parseInt(id), slug },
    });
  } catch (error) {
    console.error('Error updating blog:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

/**
 * Delete a blog post
 * DELETE /api/blogs/admin/:id
 */
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    // Get blog to delete its image
    const [existing] = await pool.execute('SELECT featured_image FROM blogs WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found.',
      });
    }

    // Delete image file if exists
    if (existing[0].featured_image) {
      const imagePath = path.join(__dirname, '../../..', existing[0].featured_image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await pool.execute('DELETE FROM blogs WHERE id = ?', [id]);

    return res.status(200).json({
      success: true,
      message: 'Blog post deleted successfully.',
    });
  } catch (error) {
    console.error('Error deleting blog:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Internal server error.',
    });
  }
};

module.exports = {
  createBlog,
  getPublishedBlogs,
  getBlogBySlug,
  getAllBlogsAdmin,
  getBlogByIdAdmin,
  updateBlog,
  deleteBlog,
};
