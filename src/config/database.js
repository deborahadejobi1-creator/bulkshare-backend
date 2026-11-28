
// Import Mongoose
const mongoose = require("mongoose");

// Load environment variables from .env
require("dotenv").config();

// Create a function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    // Display an error if the connection fails
    console.error("MongoDB connection failed:", error.message);

    process.exit(1);
  }
};

// Export the connection function
module.exports = connectDB;
