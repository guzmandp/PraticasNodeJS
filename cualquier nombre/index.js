const express = require("express");

const app = express();
const port = 8000;

const tasksRouter = require("./routes/task");
const Task = require("./models/task");

app.use(express.json());
app.use("/tasks", tasksRouter.router);

/* app.get("/teste", (req, res) => {
  res.send("Hello World");
}); */

app.listen(port, () => {
  console.log(`Iniciando na porta http://localhost:${port}`);
});
