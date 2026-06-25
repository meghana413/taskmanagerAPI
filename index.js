const express = require("express");
const taskRoutes = require("./routes/taskroutes");

const app = express();

// API status check
app.get("/", (req, res) => {
  return res.json({ status: "success", message: "Welcome to my api" });
});
const { firstMw, errorHandler } = require("./middleware/errorhandler");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(firstMw);

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
