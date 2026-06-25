const express = require("express");

const firstMw = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

const validateTask = (req, res, next) => {
  if (!req.body.task_title) {
    return res.status(400).json({
      error: "task_title is required",
    });
  }
  next();
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message,
  });
};

module.exports = {
  firstMw,
  errorHandler,
  validateTask,
};
