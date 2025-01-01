const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// montando o esquema.
const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 120
  },
  nome: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120
  },
  senha: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 120
  },
  fotoPerfil: {
    type: String,
    required: false,
    maxlength: 200
  },
  cargo: {
    type: String,
    required: true,
    /*
    O enum é uma matriz de valores permitidos 
    para este caminho. Permitido para strings, 
    números e matrizes de strings.
    */
    enum: ["USER", "USERVIP", "ADMIN"],
    default: "USER"
  },
  dataNascimento: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

// exportacao.
mongoose.model("users", User);
