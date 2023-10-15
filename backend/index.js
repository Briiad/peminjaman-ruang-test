require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const mongoString = process.env.DATABASE_URL

// Routes
const routes = require('./routes/routes')

// Connect to MongoDB
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

// Initialize Express
const app = express();

// Connect to Server
app.use(express.json());
app.use('/api', routes)

// Check port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));