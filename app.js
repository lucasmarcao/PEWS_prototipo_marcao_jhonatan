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

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/avaliacao", function (req, res) {
    res.render("html/avaliacao");
});

app.get("/questionario", function (req, res) {
    res.render("html/questionario");
});

app.get("/cadastro", function (req, res) {
    res.render("html/cadastro");
});

app.get("/categorias", function (req, res) {
    res.render("html/categorias");
});

app.get("/teste", function (req, res) {
    res.render("html/teste");
});

app.get("/form", function (req, res) {
    res.render("html/form");
});

// adm esta on.
app.use("/admin", admin);

// Outros.
const PORT = process.env.PORT || 8081;
try {
    app.listen(PORT, () => {
        console.log(
            "\n",
            __dirname,
            "\n Servidor rodando !!! para entrar, \n http://localhost:8081/ !!!"
        );
    });
} catch (error) {
    console.log("Servidor não rodou !!! , pois : ", error);
}
