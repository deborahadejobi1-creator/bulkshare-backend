
const mongoose = require("mongoose");

// Create a schema for foodstuff products
const productSchema = new mongoose.Schema(
  {
    // Name of the foodstuff
    name: {
      type: String,
      required: true,
    },

    // Information about the foodstuff
    description: {
      type: String,
      required: true,
    },

    // Price of the foodstuff
    price: {
      type: Number,
      required: true,
    },

    // Quantity currently available
    availableQuantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Product model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
