const Notification = require("../models/Notification");

// CREATE A NOTIFICATION
const createNotification = async (notificationData) => {
  const notification = await Notification.create(notificationData);

  return notification;
};

// GET ALL NOTIFICATIONS FOR A USER
const getUserNotifications = async (userId) => {
  const notifications = await Notification.find({
    recipient: userId,
  }).sort({ createdAt: -1 });

  return notifications;
};

// MARK A NOTIFICATION AS READ
const markNotificationAsRead = async (notificationId) => {
  const notification = await Notification.findByIdAndUpdate(
    notificationId,
    { isRead: true },
    { new: true }
  );

  return notification;
};

module.exports = {
  createNotification,
  getUserNotifications,
  markNotificationAsRead,
};