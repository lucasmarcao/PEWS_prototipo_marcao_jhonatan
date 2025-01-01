const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// montando o esquema.
const Comentario = new Schema({
  img: {
    type: String,
    required: false,
    maxlength: 200
  },
  conteudo: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 500
  },
  dataPublicacao: {
    type: Date,
    required: true,
    default: Date.now()
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  diretorio: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 200
  }
})

// exportacao.
mongoose.model("comentarios", Comentario);
