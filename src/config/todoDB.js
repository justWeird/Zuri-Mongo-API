//This holds the database connection code
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//create connection function
async function connectDB(uri) {
  try {
    mongoose.connect(uri || process.env.LOCAL_MONGO_DB);
    console.log("MongoDB server running...");
  } catch (error) {
    console.log(`Error instantiating MongoDB, ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
