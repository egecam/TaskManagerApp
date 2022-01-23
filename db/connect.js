require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
