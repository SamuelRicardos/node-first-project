// Chamando a biblioteca express para o projeto
const express = require("express");
// iniciando o servidor do express
const server = express();
server.use(express.json())

let customers = [
    { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br"},
    { id: 2, name: "Google", site: "http://google.com"}
];

server.get("/customers", (req,res) => {
    return res.json(customers)
});

server.get("/customers/:id", (req,res) => {
    const id = parseInt(req.params.id)
    // se o id que recebe como parametro for igual ao id dentro do array, retorne 200 e json
    const customer = customers.find(item => item.id === id)
    const status = customer ? 200: 404;

    return res.status(status).json(customer)
});

server.post("/customers",(req, res) => {
    const { name, site} = req.body;
    // pego o ultimo id e adiciono mais um para dar um id sequencial no id
    const id = customers[customers.length -1].id + 1;
    
    const newCustomer = { id, name, site};

    customers.push(newCustomer);

    return res.status(201).json(newCustomer)
});

server.put("/customers/:id",(req, res) => {
    const id = parseInt(req.params.id);
    const { name, site} = req.body;
    const index = customers.findIndex(item => item.id === id);
    const status = index >= 0 ? 200: 404;

    if(index >= 0) {
        customers[index] = { id: parseInt(id), name, site }
    }

    return res.status(status).json(customers[index]);
});

// escolhendo a porta que o servidor vai iniciar
server.listen(3000);


