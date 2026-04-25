const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { authMiddleware } = require('../middleware/auth');
const {
  getOpenJobs,
  applyJob,
  getAllJobsAdmin,
  createJob,
  updateJob,
  deleteJob,
  getApplications,
  deleteApplication
} = require('../controllers/career.controller');

// Ensure resumes directory exists
const resumesDir = path.join(__dirname, '../../uploads/resumes');
if (!fs.existsSync(resumesDir)) {
  fs.mkdirSync(resumesDir, { recursive: true });
}

// Multer configuration for resumes
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, resumesDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `resume-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = [
    'application/pdf', 
    'application/msword', 
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only PDF and Word documents are allowed.'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// ─────────── Public Routes ───────────
router.get('/jobs', getOpenJobs);
router.post('/apply', upload.single('resume'), applyJob);

// ─────────── Admin Routes (require auth) ───────────
router.get('/admin/jobs', authMiddleware, getAllJobsAdmin);
router.post('/admin/jobs', authMiddleware, createJob);
router.put('/admin/jobs/:id', authMiddleware, updateJob);
router.delete('/admin/jobs/:id', authMiddleware, deleteJob);

router.get('/admin/applications', authMiddleware, getApplications);
router.delete('/admin/applications/:id', authMiddleware, deleteApplication);

module.exports = router;
