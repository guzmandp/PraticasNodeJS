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
// const db = mongoose.connection;
// db.on("error", console.log("Erro de conectividade com MongoDB!"));

/* mongoose.connect(
  "mongodb+srv://mongoNodeJs:ytrewq54321@cluster0.4uek1.mongodb.net/testeUser?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  function (error) {
    if (error) {
      console.log("Erro de Conectividade com MongoDB!");
    } else {
      console.log("Conectividade Exitosa com MongoDB!");
    }
  }
); */

/* app.use(express.json());
//conetar ao arquivo usuário.js
const rota = require("./routes/usuario");
app.use("/users", rota); */

//usamos o req para pedir ou uma atualização de novos dados inseridos
/* app.get("/users", (req, res) => {
  console.log("Metodo get foi chamado");
  res.send("Olá Mundo");
}); */

//usado para criar um caminho uma rota.
/* app.get("/rota", (req, res) => {
  console.log("Metodo get foi chamado na rota");
  res.send("Estou dentro da rota");
}); */

//usado para retornar erro de requisição
//usamos "/nome do caminho/nome do caminho" para colocar um caminho dentro do outro no navegador
/* app.get("/rota/erro", (req, res) => {
  console.log("Metodo get foi chamado para exibir erro");
  res.status(404).send("Não consegui achar!");
}); */

// usado para retornae mensagem de sucesso
/* app.get("/sucesso", (req, res) => {
  console.log("Metodo get foi chamado para exibir sucesso");
  res.status(202).send("Encontrei!");
}); */

//para fazer uma requisição de dados
/* app.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`Nome obtido pelo usuário : ${id}`);
}); */

app.get("/users", async (req, res) => {
  const user = await User.find({});
  res.json({ user });
});

app.post("/user/novo", async (req, res) => {
  try {
    console.log(req.body);
    const { nome } = req.body;
    const { sobrenome } = req.body;
    const { idade } = req.body;
    const user = new User({ nome, sobrenome, idade });
    await user.save();
    res.send(`O user ${user.nome} foi Cadastrada com Sucesso!`);
    console.log(`O user ${user.nome} foi Cadastrada com Sucesso!`);
  } catch (error) {
    res.status(404).json({ msj: "Erro de Cadastro!" });
    console.log("Erro de Cadastro!");
  }
});

app.post("/cadastro", async (req, res) => {
  const user = new User({
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    idade: req.body.idade,
  });
  await user.save();
  res.send(user);
});

app.listen(port, () => {
  console.log(`Iniciando na porta http://localhost:${port}`);
});
