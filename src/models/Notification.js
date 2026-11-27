
const mongoose = require("mongoose");

// Create a schema for notifications
const notificationSchema = new mongoose.Schema(
  {
    // The user who should receive the notification
    recipient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // The category of notification
    type: {
      type: String,
      enum: [
        "group_progress",
        "price_change",
        "payment_confirmation",
        "contribution_deadline",
        "collection",
        "delivery",
        "group_update",
      ],
      required: true,
    },

    // The notification message
    message: {
      type: String,
      required: true,
    },

    // Whether the user has read the notification
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Create the Notification model
const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
