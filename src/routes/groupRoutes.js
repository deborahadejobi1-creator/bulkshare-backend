
const express = require("express");

const {
  createGroup,
  getAllGroups,
  getGroupById,
  joinGroup,
} = require("../controllers/groupController");

const router = express.Router();

// CREATE A NEW PURCHASE GROUP
router.post("/", createGroup);

// GET ALL PURCHASE GROUPS
router.get("/", getAllGroups);

// JOIN AN EXISTING PURCHASE GROUP
router.post("/:id/join", joinGroup);

// GET ONE PURCHASE GROUP BY ID
router.get("/:id", getGroupById);

module.exports = router;
