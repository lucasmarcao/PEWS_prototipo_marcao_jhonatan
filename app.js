// aplicativo.
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

// corpo.
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const path = require("path"); // Para lidar com caminhos de arquivos

// banco de dados.
// const admin = require("./routes/admin");

// para se conectar, é so escrever {mongod} no cmd.
const mongoose = require("mongoose");
require("./models/Paciente");
const Paciente = mongoose.model("paciente");
require("./models/Formula");
const Formula = mongoose.model("formula");
const db = require("./config/db");

// ---> Sessão.
app.use(
    session({
        secret: "jhonatanMarcao",
        resave: true,
        saveUninitialized: true,
    })
);
app.use(flash());
// ---> Midleware.
app.use((req, res, next) => {
    // Variavel global.
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});
// ---> body parser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ---> handlebars.
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");

// mongo
// ---> mongoose.

mongoose.Promise = global.Promise;
mongoose
    .connect(db.MongoURI)
    .then(() => {
        console.log(` SO=  ${process.platform}
    Conectou com o Mongodb !!!
    URL = ${db.MongoURI}`);
    })
    .catch((erro) => {
        console.log(
            db.MongoURI,
            "\n Não foi possivel conectar ao mongo, pois: " + erro
        );
    });

// rotas
// ---> Public.
app.use(express.static(path.join(__dirname, "public")));

// MINHAS URLS QUERIDAS
app.get("/", function (req, res) {
    res.render("index");
});

app.get("/avaliacao", function (req, res) {
    res.render("html/avaliacao");
});

app.get("/avaliacao-parte-2", function (req, res) {
    res.render("html/avaliacao-parte-2");
});

app.get("/avaliacao-parte-3", function (req, res) {
    res.render("html/avaliacao-parte-3");
});

app.get("/avaliacao-parte-4", function (req, res) {
    res.render("html/avaliacao-parte-4");
});

app.get("/relatorio-paciente", function (req, res) {
    res.render("html/relatorio-paciente");
});

app.get("/cadastro", function (req, res) {
    res.render("conta/cadastro");
});

app.get("/login", function (req, res) {
    res.render("conta/login");
});

app.get("/configuracoes", function (req, res) {
    res.render("conta/configuracoes");
});

app.get("/como-usar", function (req, res) {
    res.render("html/como-usar");
});

app.get("/contato", function (req, res) {
    res.render("html/contato");
});

// PARTE COM BD
app.get("/paciente", (req, res) => {
    Paciente.find()
        .lean()
        .sort({ dataConsulta: "desc" })
        .then((paciente) => {
            res.render("paciente/pacientes", { paciente: paciente });
        })
        .catch((err) => {
            res.redirect("/");
        });
});

app.get("/relatorios", function (req, res) {
    Paciente.find()
        .lean()
        .sort({ dataConsulta: "desc" })
        .then((paciente) => {
            res.render("html/relatorios", { paciente: paciente });
        })
        .catch((err) => {
            res.redirect("/");
        });
});

app.post("/paciente/nova", (req, res) => {
    const novoPaciente = {
        nome: req.body.nome,
        leito: req.body.leito,
        dataNascimento: req.body.dataNascimento,
        preco: req.body.preco,
        dataConsulta: req.body.dataConsulta,
    };

    new Paciente(novoPaciente)
        .save()
        .then(() => {
            res.redirect("/avaliacao-parte-2");
        })
        .catch(() => {
            res.redirect("/");
        });
});

app.post("/paciente/excluir", (req, res) => {
    Paciente.deleteOne({ _id: req.body.id })
        .then(() => {
            res.redirect("/paciente");
        })
        .catch((err) => {
            res.redirect(`/?${err}`);
        });
});

// 404 404
app.get("/404", (req, res) => {
    res.render("html/erro");
});
// adm esta on.
// app.use("/admin", admin);

// Middleware para capturar rotas inexistentes
app.use((req, res) => {
    res.status(404).render("html/erro", { mensagem: "Página não encontrada!" });
});
// Outros.
const PORT = process.env.PORT || 8085;
try {
    app.listen(PORT, () => {
        console.log(
            "\n",
            __dirname,
            "\nServidor rodando !!! para entrar, \n\n http://localhost:8085/ !!!\n\n",
            "padrão porta 8085, mas pode mudar se precisar ;) \n"
        );
    });
} catch (error) {
    console.log("Servidor não rodou !!! , pois : ", error);
}
