# Task Manager API

A RESTful Task Manager API built using Node.js and Express.

---

## Features

- Get all tasks
- Get task by ID
- Create tasks
- Update tasks
- Delete tasks
- Middleware support
- MVC architecture

---

## Tech Stack

- Node.js
- Express.js
- JavaScript
- File System (fs module)

---

### API check

GET /

### Get all tasks

GET /api/tasks

### Get task by ID

GET /api/tasks/:id

### Create task

POST /api/tasks

### Update task

PATCH /api/tasks/:id

### Delete task

DELETE /api/tasks/:id

## Project Structure

```text
TaskManager/
│
├── controllers/
│   └── taskcontrollers.js
│
├── routes/
│   └── taskroutes.js
│
├── middleware/
│   └── errorhandler.js
│
├── data/
│   └── tasks.json
│
├── index.js
├── package.json
└── README.md
```

---

### Response

```json
{
  "task_title": "Learn Express",
  "Completed": false,
  "Started_at": "2026-06-25",
  "Ended_at": "2026-06-26",
  "Message": "Complete Week 3 Project"
}
```

## Run Locally

```bash
npm install
npm start
```

## Author

```
Meghana Palavalasa
```
