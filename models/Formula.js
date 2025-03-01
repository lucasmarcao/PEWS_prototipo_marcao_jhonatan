const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// montando o esquema.
const Formula = new Schema({
    tipoFrequenciaCardiaca: {
        type: String,
        required: true,
        /*
        O enum é uma matriz de valores permitidos 
        para este caminho. Permitido para strings, 
        números e matrizes de strings.
        */
        enum: ["Sono", "Vígilia"],
        default: "Sono",
    },
    frequenciaCardiaca: {
        type: Number,
        required: true,
        min: 0,
        max: 1000,
    },
    frequenciaRespiratoria: {
        type: Number,
        required: true,
        min: 0,
        max: 1000,
    },
    avaliacaoNeurologica: {
        type: Number,
        required: true,
        min: 0,
        max: 3,
    },
    AvaliacaoCardioVascular: {
        type: Number,
        required: true,
        min: 0,
        max: 3,
    },
    AvaliacaoRespiratoria: {
        type: Number,
        required: true,
        min: 0,
        max: 3,
    },
    nebulizacao: {
        type: Number,
        required: true,
        min: 0,
        max: 2,
    },
    emesePosOperatorio: {
        type: Number,
        required: true,
        min: 0,
        max: 2,
    },
    dataPublicacao: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    paciente: {
        type: Schema.Types.ObjectId,
        ref: "paciente",
        required: true,
    },
    comentario: {
        type: String,
        required: false,
        maxlength: 500,
    },
});

// exportacao.
mongoose.model("formula", Formula);
