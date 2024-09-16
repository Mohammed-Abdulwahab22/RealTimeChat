const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config(); 
const userRoutes = require('./routes/users');
const messagesRoutes = require('./routes/messages');
const conversationsRoutes = require('./routes/conversations');
const userSettings = require('./routes/userSettings');

const app = express();



connectDB();


app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);
app.use('/api/messages', messagesRoutes);
app.use('/api/conversations', conversationsRoutes);
app.use('/api/userSettings', userSettings);

  const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));