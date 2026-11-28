
const express = require("express");

const {
  create,
  getAll,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
} = require("../controllers/notificationController");

const router = express.Router();

// CREATE A NOTIFICATION
router.post("/", create);

// GET ALL NOTIFICATIONS FOR A USER
router.get("/:userId", getAll);

// GET UNREAD NOTIFICATIONS COUNT FOR A USER
router.get("/:userId/unread-count", getUnreadCount);

// MARK ALL NOTIFICATIONS AS READ
router.patch("/:userId/read-all", markAllAsRead);

// MARK A NOTIFICATION AS READ
router.patch("/:id/read", markAsRead);

module.exports = router;
