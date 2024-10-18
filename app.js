const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/user-router');
const todoRoutes = require('./routes/todo-router');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing JSON
app.use(express.json());

// Koneksi ke MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });

// Rute
app.use('/api/user', userRoutes);
app.use('/api/todos', todoRoutes);


app.listen(PORT, () => {
  console.log("server running on Port" + 3000);
});