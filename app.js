require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Express Setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(require('./routes/incomingOrderRoute.js'));

module.exports = app;