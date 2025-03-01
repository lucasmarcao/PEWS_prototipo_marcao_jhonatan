const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const req = require("express/lib/request");
// const { redirect } = require("express/lib/response");
// const uploadUser = require("../middlewares/uploadImage");
// const fs = require("fs");

// bd vars.
require("../models/User");
const User = mongoose.model("users");
require("../models/Paciente");
const Categoria = mongoose.model("categorias");
require("../models/Formula");
const Comentario = mongoose.model("comentarios");
require("../models/HQ");
const HQ = mongoose.model("hqs");
require("../models/Capitulo");
const Capitulo = mongoose.model("capitulos");

// index.
router.get("/", (req, res) => {
    res.render("admin/index");
});

// user.
router.get("/users", (req, res) => {});
router.get("/users/add", (req, res) => {});
router.post("/users/nova", (req, res) => {});
router.get("/users/edit/:id", (req, res) => {});
router.post("/users/edit", (req, res) => {});
router.post("/users/excluir", (req, res) => {});

// categoria.
router.get("/categorias", (req, res) => {});
router.get("/categorias/add", (req, res) => {});
router.post("/categorias/nova", (req, res) => {});
router.get("/categorias/edit/:id", (req, res) => {});
router.post("/categorias/edit", (req, res) => {});
router.post("/categorias/excluir", (req, res) => {});

// comentario.
router.get("/comentarios", (req, res) => {});
router.get("/comentarios/add", (req, res) => {});
router.post("/comentarios/nova", (req, res) => {});
router.get("/comentarios/edit/:id", (req, res) => {});
router.post("/comentarios/edit", (req, res) => {});
router.post("/comentarios/excluir", (req, res) => {});

// hq.
router.get("/hqs", (req, res) => {});
router.get("/hqs/add", (req, res) => {});
router.post("/hqs/nova", (req, res) => {});
router.get("/hqs/edit/:id", (req, res) => {});
router.post("/hqs/edit", (req, res) => {});
router.post("/hqs/excluir", (req, res) => {});

// capitulo.
router.get("/capitulos", (req, res) => {});
router.get("/capitulos/add", (req, res) => {});
router.post("/capitulos/nova", (req, res) => {});
router.get("/capitulos/edit/:id", (req, res) => {});
router.post("/capitulos/edit", (req, res) => {});
router.post("/capitulos/excluir", (req, res) => {});

// exportando o router.
module.exports = router;
