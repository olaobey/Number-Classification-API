const express = require('express');
const cors = require('cors');
const numberRoutes = require('./routes/numberRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', numberRoutes);

// Error handling middleware
app.use(errorMiddleware);

module.exports = app;