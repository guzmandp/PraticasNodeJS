const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Rota para tudas as tarefas");
});

router.get("/:id", (req, res) => {
  res.send("Rota para uma tarefa");
});

router.post("/new", (req, res) => {
  res.send("Rota para agregar tarefa");
});

router.put("/:id", (req, res) => {
  res.send("Rota para modificar tarefa");
});

router.delete("/:id", (req, res) => {
  res.send("Rota para apagar uma tarefa");
});

module.exports.router = router;
