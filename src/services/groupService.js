
const Group = require("../models/Group");
const Product = require("../models/Product");
const User = require("../models/User");
const mongoose = require("mongoose");

// CREATE A NEW PURCHASE GROUP
const createGroup = async (groupData) => {
  const { product, createdBy, targetQuantity } = groupData;

  if (!product || !createdBy || targetQuantity === undefined) {
    throw new Error("Product, creator, and target quantity are required");
  }

  if (
    !mongoose.Types.ObjectId.isValid(product) ||
    !mongoose.Types.ObjectId.isValid(createdBy)
  ) {
    throw new Error("Invalid product ID or user ID");
  }

  if (!Number.isFinite(targetQuantity) || targetQuantity <= 0) {
    throw new Error("Target quantity must be a positive number");
  }

  const existingProduct = await Product.findById(product);
  if (!existingProduct) {
    throw new Error("Product not found");
  }

  const existingUser = await User.findById(createdBy);
  if (!existingUser) {
    throw new Error("User not found");
  }

  const group = await Group.create({
    product,
    createdBy,
    members: [createdBy],
    targetQuantity,
  });

  return group;
};

// GET ALL PURCHASE GROUPS
const getAllGroups = async () => {
  const groups = await Group.find()
    .populate("product")
    .populate("createdBy", "name email")
    .populate("members", "name email")
    .sort({ createdAt: -1 });

  return groups;
};

// GET ONE PURCHASE GROUP BY ID
const getGroupById = async (groupId) => {
  if (!mongoose.Types.ObjectId.isValid(groupId)) {
    throw new Error("Invalid group ID");
  }

  const group = await Group.findById(groupId)
    .populate("product")
    .populate("createdBy", "name email")
    .populate("members", "name email");

  if (!group) {
    throw new Error("Group not found");
  }

  return group;
};

// JOIN AN EXISTING PURCHASE GROUP
const joinGroup = async (groupId, userId) => {
  if (
    !mongoose.Types.ObjectId.isValid(groupId) ||
    !mongoose.Types.ObjectId.isValid(userId)
  ) {
    throw new Error("Invalid group ID or user ID");
  }

  const group = await Group.findById(groupId);

  if (!group) {
    throw new Error("Group not found");
  }

  // Only open groups can accept new members
  if (group.status !== "open") {
    throw new Error("This group is not open for joining");
  }

  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  // Prevent duplicate membership
  if (group.members.some((member) => member.toString() === userId)) {
    throw new Error("User has already joined this group");
  }

  group.members.push(userId);

  await group.save();

  return group;
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  joinGroup,
};
