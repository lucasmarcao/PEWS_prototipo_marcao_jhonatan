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

const port = 3002; // Porta do servidor

// Criar o servidor HTTP
const server = http.createServer((req, res) => {
    // Verifica se a URL é a raiz do site (localhost:3002)
    if (req.url === "/") {
        // Caminho para o arquivo index.html
        const filePath = path.join(__dirname, "html", "index.html");

        // Lê o arquivo HTML
        fs.readFile(filePath, "utf-8", (err, data) => {
            if (err) {
                // Caso ocorra um erro ao ler o arquivo
                res.statusCode = 500;
                res.end("Erro ao ler o arquivo.");
            } else {
                // Caso o arquivo seja lido corretamente
                res.statusCode = 200;
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            }
        });
    } else {
        // Para qualquer outra URL, retorna um erro 404
        res.statusCode = 404;
        res.end("Página não encontrada");
    }
});

// Inicia o servidor na porta 3002
try {
    server.listen(port, () => {
        console.log(`\nServidor rodando em http://localhost:${port}`);
    });
} catch (error) {
    console.log(
        `\nnão rodou em http://localhost:${port} \n
    // pois\n`,
        error
    );
}
