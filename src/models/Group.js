
const mongoose = require("mongoose");

// Create a schema for group purchases
const groupSchema = new mongoose.Schema(
  {
    // Product being purchased by the group
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    // User who created the group
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Users who have joined the group
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    // Target quantity the group wants to purchase
    targetQuantity: {
      type: Number,
      required: true,
    },

    // Current group status
    status: {
      type: String,
      default: "open",
    },
  },
  {
    timestamps: true,
  }
);

// Create and export the Group model
const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
