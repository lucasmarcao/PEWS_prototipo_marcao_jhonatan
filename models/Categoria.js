const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// montando o esquema.
const Categorias = new Schema({
  nome: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 150,
    unique: true
  },
  descricao: {
    type: String,
    required: false,
    maxlength: 800
  },
  iconCapa: {
    type: String,
    required: false,
    maxlength: 200
  },
  dataCriacao: {
    type: Date,
    required: true,
    default: Date.now()
  },
  notaGeral: {
    type: Number,
    required: false,
    min: 0,
    max: 10,
  },
  acessoLivre: {
    type: Boolean,
    required: true,
    default: true
  },
  criadorCategoria: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  }
});

// exportacao.
mongoose.model("categorias", Categorias);
