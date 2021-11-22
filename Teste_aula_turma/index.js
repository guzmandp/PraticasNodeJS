const express = require("express");

const app = express();
const port = 8000;

app.listen(port, () => {
  console.log(`Iniciando na porta http://localhost:${port}`);
});

const tasksRouter = require("./routes/tasks");
const sequelize = require("./conection");
const Task = require("./models/task");

Task.sync();

app.use(express.json());
app.use("/tasks", tasksRouter.router);
