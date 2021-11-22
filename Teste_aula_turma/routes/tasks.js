const express = require("express");
const Task = require("../models/task");

const router = express.Router();

router.get("/", async (req, res) => {
  const task = await Task.findAll();
  res.send({ task });
});

router.get("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    res.send({ task });
  } else {
    res.status(404).send("Error de Requisição");
  }
});

router.post("/new", async (req, res) => {
  if (req.body.description && req.body.done) {
    const task = await Task.create({
      description: req.body.description,
      done: req.body.done,
    });
    res.status(201).send(task);
  } else {
    res.status(400).send("Error na Requisição");
  }
});

router.put("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if ((task && req.body.description) || req.body.done) {
    await task.update(req.body);
    res.send(task);
  } else {
    res.status(404).send("error na requisição");
  }
});

router.delete("/:id", async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
    res.send("Deletado!!!!");
  } else {
    res.status(404).send("error na requisição");
  }
});

module.exports.router = router;
