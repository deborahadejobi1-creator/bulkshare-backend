
const groupService = require("../services/groupService");

// CREATE A NEW PURCHASE GROUP
const createGroup = async (req, res) => {
  try {
    const group = await groupService.createGroup(req.body);

    res.status(201).json({
      message: "Group created successfully",
      group,
    });
  } catch (error) {
    const validationErrors = [
      "required",
      "Invalid",
      "positive number",
    ];

    if (
      validationErrors.some((message) =>
        error.message.includes(message)
      )
    ) {
      return res.status(400).json({ message: error.message });
    }

    if (
      error.message === "Product not found" ||
      error.message === "User not found"
    ) {
      return res.status(404).json({ message: error.message });
    }

    res.status(500).json({ message: "Failed to create group" });
  }
};

// GET ALL PURCHASE GROUPS
const getAllGroups = async (req, res) => {
  try {
    const groups = await groupService.getAllGroups();

    res.status(200).json({
      message: "Groups retrieved successfully",
      count: groups.length,
      groups,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve groups",
    });
  }
};

// GET ONE PURCHASE GROUP BY ID
const getGroupById = async (req, res) => {
  try {
    const group = await groupService.getGroupById(req.params.id);

    res.status(200).json({
      message: "Group retrieved successfully",
      group,
    });
  } catch (error) {
    if (error.message === "Invalid group ID") {
      return res.status(400).json({ message: error.message });
    }

    if (error.message === "Group not found") {
      return res.status(404).json({ message: error.message });
    }

    res.status(500).json({
      message: "Failed to retrieve group",
    });
  }
};

// JOIN AN EXISTING PURCHASE GROUP
const joinGroup = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const group = await groupService.joinGroup(
      req.params.id,
      userId
    );

    res.status(200).json({
      message: "You have successfully joined the group",
      group,
    });
  } catch (error) {
    if (
      error.message === "Invalid group ID or user ID" ||
      error.message === "User has already joined this group" ||
      error.message === "This group is not open for joining"
    ) {
      return res.status(400).json({ message: error.message });
    }

    if (
      error.message === "Group not found" ||
      error.message === "User not found"
    ) {
      return res.status(404).json({ message: error.message });
    }

    res.status(500).json({
      message: "Failed to join group",
    });
  }
};

module.exports = {
  createGroup,
  getAllGroups,
  getGroupById,
  joinGroup,
};
