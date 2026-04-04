const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');
const {
  registerAdmin,
  loginAdmin,
  getAdminProfile,
  getDashboardStats,
  getAdminLeads,
  deleteAdmissionLead,
} = require('../controllers/admin.controller');

// ─────────── Public Routes ───────────
router.post('/register', registerAdmin);
router.post('/login', loginAdmin);

// ─────────── Protected Routes (require JWT) ───────────
router.get('/profile', authMiddleware, getAdminProfile);
router.get('/dashboard', authMiddleware, getDashboardStats);
router.get('/leads', authMiddleware, getAdminLeads);
router.delete('/leads/:id', authMiddleware, deleteAdmissionLead);

module.exports = router;
