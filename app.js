// aplicativo.
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");

// corpo.
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

const http = require("http"); // Para criar o servidor
const fs = require("fs"); // Para ler arquivos do sistema de arquivos
const path = require("path"); // Para lidar com caminhos de arquivos

// banco de dados.
const admin = require("./routes/admin");

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

// mongoose.Promise = global.Promise;
// mongoose
//     .connect(db.MongoURI)
//     .then(() => {
//         console.log(` SO=  ${process.platform}
//     Conectou com o Mongodb !!!
//     URL = ${db.MongoURI}`);
//     })
//     .catch((erro) => {
//         console.log(
//             db.MongoURI,
//             "\n Não foi possivel conectar ao mongo, pois: " + erro
//         );
//     });

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

app.get("/relatorios", function (req, res) {
    res.render("html/relatorios");
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

app.get("/404", (req, res) => {
    res.render("html/erro");
});
// adm esta on.
app.use("/admin", admin);

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
