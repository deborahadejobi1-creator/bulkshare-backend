
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

// GET UNREAD NOTIFICATIONS COUNT FOR A USER
const getUnreadNotificationCount = async (userId) => {
  const count = await Notification.countDocuments({
    recipient: userId,
    isRead: false,
  });

  return count;
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

// MARK ALL NOTIFICATIONS AS READ
const markAllNotificationsAsRead = async (userId) => {
  const result = await Notification.updateMany(
    {
      recipient: userId,
      isRead: false,
    },
    {
      isRead: true,
    }
  );

  return result.modifiedCount;
};

module.exports = {
  createNotification,
  getUserNotifications,
  getUnreadNotificationCount,
  markNotificationAsRead,
  markAllNotificationsAsRead,
};
