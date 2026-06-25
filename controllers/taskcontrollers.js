const fs = require("fs");

const readTasks = () => {
  try {
    return JSON.parse(fs.readFileSync("./data/tasks.json", "utf8"));
  } catch (err) {
    return [];
  }
};

// get all tasks
const getTasks = (req, res) => {
  const tasks = readTasks();
  return res.json(tasks);
};

// get one task
const getTask = (req, res) => {
  const myId = Number(req.params.id);
  const tasks = readTasks();
  const task = tasks.find((task) => task.id === myId);
  if (!task) return res.status(404).json({ error: "Task not found" });
  return res.json(task);
};

// delete a task
const deleteTask = (req, res) => {
  const tasks = readTasks();
  const myId = Number(req.params.id);
  const task = tasks.find((task) => task.id === myId);

  if (!task) {
    return res.status(404).json({
      error: "Task not found",
    });
  }
  const updatedtasks = tasks.filter((task) => task.id !== myId);

  fs.writeFile(
    "./data/tasks.json",
    JSON.stringify(updatedtasks, null, 2),
    (err, data) => {
      return res.json({
        status: "success",
        id: myId,
        message: "task deleted",
      });
    },
  );
};

// update a task
const updateTask = (req, res) => {
  const myId = Number(req.params.id);
  const tasks = readTasks();
  const task = tasks.find((task) => task.id === myId);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }
  Object.assign(task, req.body);

  fs.writeFile("./data/tasks.json", JSON.stringify(tasks, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to update task" });
    }
    res.json({
      status: "success",
      message: "Task updated",
      updatedTask: task,
    });
  });
};

// create a task
const createTask = (req, res) => {
  const tasks = readTasks();
  const body = req.body;
  console.log(req.body);

  if (!body.task_title) {
    return res.status(400).json({ message: "Task title is required" });
  }

  const maxId = tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) : 0;

  const newtask = {
    id: maxId + 1,
    task_title: body.task_title,
    Completed: body.Completed ?? false,
    Started_at: body.Started_at,
    Ended_at: body.Ended_at,
    Message: body.Message,
  };

  tasks.push(newtask);

  fs.writeFileSync("./data/tasks.json", JSON.stringify(tasks, null, 2));

  res.json({
    status: "success",
    message: `Task is uploaded successfully at ${body.Started_at}`,
    task: newtask,
  });
};

module.exports = {
  getTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
};
