const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// montando o esquema.
const HQ = new Schema({
  nome: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200
  },
  autor: {
    type: String,
    required: true,
    default: "desconhecido",
    minlength: 3,
    maxlength: 200
  },
  paisOrigem: {
    type: String,
    required: true,
    default: "Japão",
    minlength: 3,
    maxlength: 200
  },
  dataCriacao: {
    type: Date,
    required: true,
    default: Date.now()
  },
  imgHQ: {
    type: String,
    required: true,
    default: "/img/capaHQdefalt.png",
    minlength: 3,
    maxlength: 200
  },
  descricao: {
    type: String,
    required: false,
    maxlength: 200
  },
  nota: {
    type: Number,
    required: false,
    min: 0,
    max: 10
  },
  categoria: {
    type: Schema.Types.ObjectId,
    ref: "categorias",
    required: true,
  },
  colorido: {
    type: Boolean,
    required: true,
    default: false,
  }
})

// exportacao.
mongoose.model("hqs", HQ);
