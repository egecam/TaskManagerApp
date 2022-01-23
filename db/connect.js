require("dotenv").config();
const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_URI;

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to the database"))
  .catch((err) => console.log(err));
