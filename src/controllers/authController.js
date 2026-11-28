
const { registerUser, loginUser } = require("../services/authService");
const generateToken = require("../utils/generateToken");

// REGISTER A NEW USER
const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

// LOGIN AN EXISTING USER
const login = async (req, res) => {
  try {
    const user = await loginUser(req.body);

    // Generate an authentication token
    const token = generateToken(user._id);

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(401).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

// EXPORT THE FUNCTIONS
module.exports = {
  register,
  login,
};
