
const express = require("express");

// Import product controller functions
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} = require("../controllers/productController");

// Create a router
const router = express.Router();

// Route for creating a product
router.post("/", createProduct);

// Route for retrieving all products
router.get("/", getAllProducts);

// Route for retrieving one product by ID
router.get("/:id", getProductById);

// Route for updating a product
router.put("/:id", updateProduct);

// Export the router
module.exports = router;
