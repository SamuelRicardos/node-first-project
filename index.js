// Chamando a biblioteca express para o projeto
const express = require("express");
// iniciando o servidor do express
const server = express();

server.get("/hello", (req, res) => {
    return res.json({ 
        title:  "Hello world",
        message: "Minha primeira requisicao no node"
    });
});

// escolhendo a porta que o servidor vai iniciar
server.listen(3000);


