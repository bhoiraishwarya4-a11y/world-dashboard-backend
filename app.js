const express = require('express');
require('dotenv').config();

const db = require('./config/db');

const app = express();
const port = process.env.PORT || 5011;

// Middleware
app.use(express.json());

// Test API
app.get('/', (req, res) => {
    res.send('World Dashboard Backend is Running!');
});

// Server
app.listen(port, () => {
    console.log(`Server running on port ${port}clear`);
});