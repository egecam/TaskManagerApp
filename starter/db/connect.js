require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;
