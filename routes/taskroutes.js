const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
} = require("../controllers/taskcontrollers");

const { validateTask } = require("../middleware/errorhandler");

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", validateTask, createTask);
router.patch("/:id", validateTask, updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
