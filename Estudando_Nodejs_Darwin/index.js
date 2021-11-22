const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");

const app = express();
const port = 6000;

app.use(express.json());

const mongoUrl =
  "mongodb+srv://mongoNodeJs:ytrewq54321@cluster0.4uek1.mongodb.net/testeUser?retryWrites=true&w=majority";
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/users", async (req, res) => {
  const user = await User.find({});
  res.json({ user });
});

app.post("/user/novo", async (req, res) => {
  try {
    console.log(req.body);
    const { nome, sobrenome, idade } = req.body;
    const user = new User({ nome, sobrenome, idade });
    await user.save();
    res.send(`O user ${user.nome} foi Cadastrada com Sucesso!`);
    console.log(`O user ${user.nome} foi Cadastrada com Sucesso!`);
  } catch (error) {
    res.status(404).json({ msj: "Erro de Cadastro!" });
    console.log("Erro de Cadastro!");
  }
});

app.listen(port, () => {
  console.log(`Iniciando na porta http://localhost:${port}`);
});
