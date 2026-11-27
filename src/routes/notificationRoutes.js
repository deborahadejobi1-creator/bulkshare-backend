const express = require("express");

const {
  create,
  getAll,
  markAsRead,
} = require("../controllers/notificationController");

const router = express.Router();

// CREATE A NOTIFICATION
router.post("/", create);

// GET ALL NOTIFICATIONS FOR A USER
router.get("/:userId", getAll);

// MARK A NOTIFICATION AS READ
router.patch("/:id/read", markAsRead);

module.exports = router;