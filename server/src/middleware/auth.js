const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'doon_admin_secret_key_2025';

/**
 * Middleware to verify JWT token for admin routes
 */
const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        success: false,
        message: 'Access denied. No token provided.',
      });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    req.admin = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Token expired. Please login again.',
      });
    }
    return res.status(401).json({
      success: false,
      message: 'Invalid token. Access denied.',
    });
  }
};

module.exports = { authMiddleware, JWT_SECRET };
