const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// montando o esquema.
const Capitulo = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    min: 0,
    max: 2000000
  },
  numero: {
    type: Number,
    required: true,
    min: 0,
    max: 20000
  },
  hq: {
    type: Schema.Types.String,
    ref: "hqs",
    required: true,
  },
  dataPublicacao: {
    type: Date,
    required: true,
    default: Date.now()
  },
  titulo: {
    type: String,
    required: false,
    maxlength: 200
  },
  paginas: {
    type: Array,
    required: true,
    minlength: 1,
    maxlength: 999
  },
  ultimoQueMexeu: {
    type: Schema.Types.String,
    ref: "users",
    required: true,
    default: "Lucas Marcão"
  }
})

// exportacao.
mongoose.model("capitulos", Capitulo);
