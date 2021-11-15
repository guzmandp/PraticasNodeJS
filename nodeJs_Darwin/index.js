const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");
const port = 5000;

const sequelize = new Sequelize("postgres://postgres:example@db:5432/toti");
app.set("view engine", "ejs");

app.get("/fotos", (req, res) => {
  res.render("fotos");
});

app.get("/cachorros", (req, res) => {
  res.send("Hello World, rota cachorros");
});

app.listen(5000, () => {
  console.log(`Iniciando o servidos express na porta: ${port}`);
});
