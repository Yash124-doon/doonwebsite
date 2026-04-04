const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { authMiddleware } = require('../middleware/auth');
const {
  createBlog,
  getPublishedBlogs,
  getBlogBySlug,
  getAllBlogsAdmin,
  getBlogByIdAdmin,
  updateBlog,
  deleteBlog,
} = require('../controllers/blog.controller');

// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, '../../uploads/blogs');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer configuration for blog images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `blog-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/avif'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, PNG, WebP, and AVIF images are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// ─────────── Public Routes ───────────
router.get('/', getPublishedBlogs);
router.get('/post/:slug', getBlogBySlug);

// ─────────── Admin Routes (require JWT) ───────────
router.get('/admin/all', authMiddleware, getAllBlogsAdmin);
router.get('/admin/:id', authMiddleware, getBlogByIdAdmin);
router.post('/admin/create', authMiddleware, upload.single('featured_image'), createBlog);
router.put('/admin/:id', authMiddleware, upload.single('featured_image'), updateBlog);
router.delete('/admin/:id', authMiddleware, deleteBlog);

module.exports = router;
