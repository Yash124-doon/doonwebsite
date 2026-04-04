const express = require('express');
const { body } = require('express-validator');
const { submitEnquiry, admissionEnquiry } = require('../controllers/enquiry.controller');

const router = express.Router();

// Validation middleware for enquiry form
const validateEnquiry = [
  body('parentName')
    .trim()
    .notEmpty()
    .withMessage('Parent/Guardian name is required')
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email address'),

  body('phone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required')
    .isLength({ min: 10 })
    .withMessage('Phone number must be at least 10 digits'),

  body('interestedGrade')
    .trim()
    .notEmpty()
    .withMessage('Interested grade is required'),

  body('enquiryType')
    .trim()
    .notEmpty()
    .withMessage('Enquiry type is required'),

  body('preferredContact')
    .trim()
    .notEmpty()
    .withMessage('Preferred contact method is required'),

  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters'),

  body('studentName')
    .optional({ values: 'falsy' })
    .trim()
    .isLength({ max: 100 })
    .withMessage('Student name must not exceed 100 characters'),

  body('currentGrade')
    .optional({ values: 'falsy' })
    .trim(),
];

// Handle validation errors middleware
const handleValidation = (req, res, next) => {
  const { validationResult } = require('express-validator');
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


// POST /api/enquiry — Submit enquiry and send email
router.post('/', validateEnquiry, handleValidation, submitEnquiry);
router.post('/admission-enquiry', admissionEnquiry);

module.exports = router;
