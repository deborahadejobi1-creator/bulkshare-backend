
const jwt = require("jsonwebtoken");

// GENERATE AN AUTHENTICATION TOKEN
const generateToken = (userId) => {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// EXPORT THE FUNCTION
module.exports = generateToken;
