
const mongoose = require("mongoose");

// Create a schema for user accounts
const userSchema = new mongoose.Schema(
  {
    // User's full name
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // User's email address
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    // User's password
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
