//

const express = require("express");
const rota = express.Router();

rota.get("/", (req, res) => {
  res.send("Estamos na rota de usuários");
});

rota.get("/novo", (req, res) => {
  res.send("Estamos na rota novo");
});

module.exports = rota;
