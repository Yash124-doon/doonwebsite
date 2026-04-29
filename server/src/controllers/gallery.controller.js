const { pool } = require('../config/db');
const path = require('path');
const fs = require('fs');

/**
 * Initialize gallery table in the database
 */
const initGalleryTable = async () => {
  try {
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS gallery (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        category VARCHAR(100) NOT NULL,
        image_url VARCHAR(500) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_category (category)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    console.log('✅ Gallery table initialized successfully');
  } catch (error) {
    console.error('❌ Error initializing gallery table:', error.message);
  }
};

// Initialize on load
initGalleryTable();

const getAllGallery = async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM gallery ORDER BY created_at DESC');
    return res.status(200).json({
      success: true,
      data: rows,
    });
  } catch (error) {
    console.error('Error fetching gallery:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const createGalleryItem = async (req, res) => {
  try {
    const { title, category } = req.body;
    if (!title || !category || !req.file) {
      return res.status(400).json({ success: false, message: 'Title, category, and image are required.' });
    }
    
    const image_url = `/uploads/gallery/${req.file.filename}`;
    
    const [result] = await pool.execute(
      'INSERT INTO gallery (title, category, image_url) VALUES (?, ?, ?)',
      [title.trim(), category.trim(), image_url]
    );

    return res.status(201).json({
      success: true,
      message: 'Gallery item uploaded successfully',
      data: { id: result.insertId, title, category, image_url }
    });
  } catch (error) {
    console.error('Error creating gallery item:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

const deleteGalleryItem = async (req, res) => {
  try {
    const { id } = req.params;
    const [existing] = await pool.execute('SELECT image_url FROM gallery WHERE id = ?', [id]);
    if (existing.length === 0) {
      return res.status(404).json({ success: false, message: 'Gallery item not found' });
    }

    const imagePath = path.join(__dirname, '../../..', existing[0].image_url);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    await pool.execute('DELETE FROM gallery WHERE id = ?', [id]);
    return res.status(200).json({ success: true, message: 'Gallery item deleted successfully' });
  } catch (error) {
    console.error('Error deleting gallery item:', error.message);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  getAllGallery,
  createGalleryItem,
  deleteGalleryItem,
};
