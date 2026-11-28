
const {
  createNotification,
  getUserNotifications,
  getUnreadNotificationCount,
  markNotificationAsRead,
  markAllNotificationsAsRead,
} = require("../services/notificationService");

// CREATE A NOTIFICATION
const create = async (req, res) => {
  try {
    const notification = await createNotification(req.body);

    res.status(201).json({
      message: "Notification created successfully",
      notification,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create notification",
      error: error.message,
    });
  }
};

// GET USER NOTIFICATIONS
const getAll = async (req, res) => {
  try {
    const notifications = await getUserNotifications(req.params.userId);

    res.status(200).json({
      message: "Notifications retrieved successfully",
      notifications,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve notifications",
      error: error.message,
    });
  }
};

// GET UNREAD NOTIFICATIONS COUNT
const getUnreadCount = async (req, res) => {
  try {
    const count = await getUnreadNotificationCount(req.params.userId);

    res.status(200).json({
      message: "Unread notifications count retrieved successfully",
      count,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve unread notifications count",
      error: error.message,
    });
  }
};

// MARK A NOTIFICATION AS READ
const markAsRead = async (req, res) => {
  try {
    const notification = await markNotificationAsRead(req.params.id);

    if (!notification) {
      return res.status(404).json({
        message: "Notification not found",
      });
    }

    res.status(200).json({
      message: "Notification marked as read successfully",
      notification,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to mark notification as read",
      error: error.message,
    });
  }
};

// MARK ALL NOTIFICATIONS AS READ
const markAllAsRead = async (req, res) => {
  try {
    const modifiedCount = await markAllNotificationsAsRead(req.params.userId);

    res.status(200).json({
      message: "All notifications marked as read successfully",
      modifiedCount,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to mark all notifications as read",
      error: error.message,
    });
  }
};

module.exports = {
  create,
  getAll,
  getUnreadCount,
  markAsRead,
  markAllAsRead,
};
