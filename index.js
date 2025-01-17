// Chamando a biblioteca express para o projeto
const express = require("express");
// iniciando o servidor do express
const server = express();
// Query params tem parametros opcionais
server.get("/hello", (req, res) => {
    const { nome, idade} = req.query;

    return res.json({ 
        title:  "Hello world",
        message: `Olá ${nome} tudo bem com você!?`,
        idade: idade
    });
});

// Route params tem parametros obrigatórios na rota do endpoint
server.get("/hello/:nome/:idade", (req,res) => {
    const { nome, idade } = req.params;

    return res.json({ 
        title:  "Hello world",
        message: `Olá ${nome} tudo bem!?`,
        idade: idade
    });
});

// escolhendo a porta que o servidor vai iniciar
server.listen(3000);


