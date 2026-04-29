const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const admissionRoutes = require('./routes/admission.routes');
const adminRoutes = require('./routes/admin.routes');
const enquiryRoutes = require('./routes/enquiry.routes');
const blogRoutes = require('./routes/blog.routes');
const careerRoutes = require('./routes/career.routes');
const galleryRoutes = require('./routes/gallery.routes');

const app = express();

// --------------- Security Middleware ---------------
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false,
  })
);

// --------------- CORS Configuration ---------------
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'https://dooninternationaljabalpur.com',
  'https://www.dooninternationaljabalpur.com',
  'http://dooninternationaljabalpur.com',
  'http://www.dooninternationaljabalpur.com',
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, curl, server-to-server)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error('Not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  })
);

// --------------- Body Parsing ---------------
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// --------------- Static Files (Uploads) ---------------
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// --------------- Health Check ---------------
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Doon School API server is running',
    timestamp: new Date().toISOString(),
  });
});

// --------------- API Routes ---------------
app.use('/api/admission', admissionRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/enquiry', enquiryRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/career', careerRoutes);
app.use('/api/gallery', galleryRoutes);

// --------------- 404 Handler ---------------
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

// --------------- Global Error Handler ---------------
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.message);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

module.exports = app;
