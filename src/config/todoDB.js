//This holds the database connection code
const mongoose = require("mongoose");
const connectDB = async (uri) => {
  try {
    const conn = await mongoose.connection(
      uri || "mongodb://localhost:27017/todoDB"
    );
    console.log("MongoDB server running...");
  } catch (error) {
    console.log("Error instantiating MongoDB");
    process.exit(1);
  }
};

module.exports = connectDB;
