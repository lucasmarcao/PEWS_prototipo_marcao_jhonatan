const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// montando o esquema.
const Paciente = new Schema({
    nome: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 150,
        unique: true,
    },
    leito: {
        type: Number,
        required: true,
        min: 0,
        max: 10000,
    },
    dataNascimento: {
        type: Date,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
        min: 0,
        max: 999999,
    },
    dataConsulta: {
        type: Date,
        required: true,
    },
    // dataCriacao: {
    //     type: Date,
    //     required: true,
    //     default: Date.now(),
    // },
    // acessoLivre: {
    //     type: Boolean,
    //     required: true,
    //     default: true,
    // },
    // criadorCategoria: {
    //   type: Schema.Types.ObjectId,
    //   ref: "users",
    //   required: true,
    // }
});

// exportacao.
mongoose.model("paciente", Paciente);
