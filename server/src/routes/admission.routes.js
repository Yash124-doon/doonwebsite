const express = require('express');
const { body, validationResult } = require('express-validator');
const {
  submitAdmissionLead,
  getAllAdmissionLeads,
  getAdmissionLeadById,
} = require('../controllers/admission.controller');

const router = express.Router();

// Validation middleware for admission lead
const validateAdmissionLead = [
  body('student_name')
    .trim()
    .notEmpty()
    .withMessage('Student name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Student name must be between 2 and 100 characters'),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .matches(/^[0-9+\-() ]{7,20}$/)
    .withMessage('Please provide a valid phone number'),

  body('parent_name')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ max: 100 })
    .withMessage('Parent name must not exceed 100 characters'),

  body('class_applied')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ max: 50 })
    .withMessage('Class applied must not exceed 50 characters'),

  body('message')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Message must not exceed 1000 characters'),
];

// Handle validation errors
const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array().map((err) => ({
        field: err.path,
        message: err.msg,
      })),
    });
  }
  next();
};

// Routes
router.post('/', validateAdmissionLead, handleValidation, submitAdmissionLead);
router.get('/', getAllAdmissionLeads);
router.get('/:id', getAdmissionLeadById);

module.exports = router;
