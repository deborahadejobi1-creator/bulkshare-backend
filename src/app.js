
// Import the Express framework
const express = require("express");

// Import authentication routes
const authRoutes = require("./routes/authRoutes");

// Import product routes
const productRoutes = require("./routes/productRoutes");

// Import notification routes
const notificationRoutes = require("./routes/notificationRoutes");

// Import group routes
const groupRoutes = require("./routes/groupRoutes");

// Create an Express application
const app = express();

// MIDDLEWARE
// Allows the server to read JSON data from requests
app.use(express.json());

// Connect authentication routes to the main application
app.use("/api/auth", authRoutes);

// Register the product routes
app.use("/api/products", productRoutes);

// Register the notification routes
app.use("/api/notifications", notificationRoutes);

// Register the group routes
app.use("/api/groups", groupRoutes);

// BASIC TEST ROUTE
// Responds when someone visits the root URL of the server
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the BulkShare API",
  });
});

// Export the application so it can be used in other files
module.exports = app;
