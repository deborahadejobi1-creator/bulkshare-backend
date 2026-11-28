
const bcrypt = require("bcrypt");
const User = require("../models/User");

// REGISTER A NEW USER
const registerUser = async (userData) => {
  // Check if the email is already registered
  const email = userData.email.trim().toLowerCase();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("Email is already registered");
  }

  // Hash the user's password
  const hashedPassword = await bcrypt.hash(userData.password, 10);

  // Create the user account
  const user = await User.create({
    name: userData.name,
    email,
    password: hashedPassword,
  });

  return user;
};

// LOGIN AN EXISTING USER
const loginUser = async (userData) => {
  // Find the user by email
  const email = userData.email.trim().toLowerCase();

  const user = await User.findOne({ email });

  // Check if the user exists
  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare the supplied password with the stored hashed password
  const isPasswordCorrect = await bcrypt.compare(
    userData.password,
    user.password
  );

  // Reject incorrect passwords
  if (!isPasswordCorrect) {
    throw new Error("Invalid email or password");
  }

  return user;
};

// EXPORT THE FUNCTIONS
module.exports = {
  registerUser,
  loginUser,
};
