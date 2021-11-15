const mongoose = require("mongoose");
const userEsquema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("user", userEsquema);
