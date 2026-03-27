const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const paymentRoutes = require('./routes/payment');

const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3000;

// Security and Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors({ 
  origin: (origin, callback) => {
    const allowed = process.env.frontend_URL || 'http://localhost:3000';
    // Remove trailing slashes for comparison
    const normalizedAllowed = allowed.replace(/\/$/, '');
    const normalizedOrigin = origin ? origin.replace(/\/$/, '') : '';
    
    if (!origin || normalizedOrigin === normalizedAllowed) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
app.use(bodyParser.json());

// API Rate Limiting against Bruteforce
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  message: 'Too many requests from this IP, please try again after 15 minutes',
});
app.use('/api/', apiLimiter);

// Protect sensitive files and directories with path normalization
app.use((req, res, next) => {
  const forbidden = [
    '/backend', '/node_modules', '/.env', '.env', 
    '/package.json', '/package-lock.json', '/.git', 'config.js'
  ];
  
  // Normalize and decode to catch encoding bypasses (e.g. %2e%2e/.env)
  const normalizedPath = decodeURIComponent(req.path).toLowerCase();
  
  if (forbidden.some(pattern => normalizedPath.includes(pattern.toLowerCase()))) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  next();
});

// Serve frontend files
app.use(express.static(path.join(__dirname, '../')));

// Database connection
// Removed deprecated options: useNewUrlParser, useUnifiedTopology
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Routes
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to FolioTub API',
    endpoints: ['/api/auth', '/api/payment'],
    status: 'online'
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

// Catch-all route to serve the SPA (if any, but here we have multiple HTML files)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// START
app.listen(PORT, () => {
  console.log(`🚀 Server started on port ${PORT}`);
  console.log(`📡 API Endpoints available at http://localhost:${PORT}/api`);
});
