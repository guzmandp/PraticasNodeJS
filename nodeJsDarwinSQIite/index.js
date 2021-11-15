const express = require("express");
const app = express();
const port = 5000;
const { Sequelize, DataTypes } = require("sequelize");
const TaskModel = require("./models/task");

//const sequelize = new Sequelize("postgres://postgres:example@db:5432/toti");
//Conexion con nuestra base de datos de sqlite
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "my-database.db",
});

const tasks = TaskModel(sequelize, DataTypes);

app.set("view engine", "ejs");

app.get("/tarefas", async (req, res) => {
  const allTasks = await tasks.findAll();

  res.json({
    allTasks,
  });
});

app.get("/tarefa/:id", async (req, res) => {
  const taskId = req.params.id;

  const task = await tasks.findByPk(taskId);

  res.render("tarefa", {
    id: task.id,
    name: task.name,
  });
});

app.listen(5000, () => {
  console.log(`Iniciando o servidos express na porta: ${port}`);
});
