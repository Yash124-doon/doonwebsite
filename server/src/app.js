const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const admissionRoutes = require('./routes/admission.routes');

const app = express();

// --------------- Security Middleware ---------------
app.use(helmet());

// --------------- CORS Configuration ---------------
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
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
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

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
