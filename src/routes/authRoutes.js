
const express = require("express");

// Import authentication controllers
const { register, login } = require("../controllers/authController");

// Create a separate router for authentication routes
const router = express.Router();

// REGISTRATION ROUTE
router.post("/register", register);

// LOGIN ROUTE
router.post("/login", login);

// Export the router
module.exports = router;
