
const express = require("express");

// Import authentication middleware
const protect = require("../middleware/authMiddleware");

// Create a router
const router = express.Router();

// PROTECTED USER PROFILE ROUTE
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "User profile accessed successfully",
    user: req.user,
  });
});

// Export the router
module.exports = router;
