const express = require("express");
const cors = require("cors");
// const mongoose = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config(); 
const userRoutes = require('./routes/users');


const app = express();



connectDB();


app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);

  const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));