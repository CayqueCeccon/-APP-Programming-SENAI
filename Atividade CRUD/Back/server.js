//Preciso acessar o caminho ./-app-programming-senai/Atividade CRUD/Back
//npm i cors express mysql2 nodemon
//npm start

const express = require('express');
const mysql = require("mysql2")
const cors = require("cors")
const app = express();

const port = 8080;

app.use(express.json())
app.use(cors({
    origin: '*'
}))

const connection = mysql.createConnection({
    user: "root",
    password: "root",
    host:"localhost",
    database: "loja",
    port: 3307
})

if(connection) {
    console.log("Banco conectado!")
}

app.listen(port, () => {
    console.log("Servidor rodando em http://localhost:8080")
})

app.get('/', (req, res) =>{
    return res.send("Servidor funcionando corretamente!")
})

app.get("/vendas/:id", (req, res) => {
    const { id } = req.params
    connection.query("SELECT * FROM vendas WHERE id_venda = ?", [id], (err, results) => {
        if (err){
            return
        }
        return res.status(200).send(results[0])
    })
})

app.post('/vendas/registro', (req, res) => {
    const { nome_produto, categoria, quantidade, preco, forma_pagamento, nome_vendedor } = req.body
    let total_preco = quantidade * preco

    const query = `
        INSERT INTO vendas (
            nome_produto,
            categoria,
            quantidade,
            preco,
            total_preco,
            data_venda,
            forma_pagamento,
            nome_vendedor
        ) VALUES (?, ?, ?, ?, ?, CURRENT_DATE(), ?, ?)
    `;

    connection.query(query, [nome_produto, categoria, quantidade, preco, total_preco, forma_pagamento, nome_vendedor], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send({ error: "Erro ao registrar venda" });
        }
        return res.status(201).send({ response: "Venda registrada com sucesso!" });
    });
})

app.delete('/vendas/deletar/:id', (req, res) => {
    const { id } = req.params
    try{
        connection.query("DELETE FROM vendas WHERE id_venda = ?", [id])
        return res.status(200).send({ message: "Venda deletada com sucesso!"})
    }
    catch(e){
        return res.status(500).send({error: e})
    }
})

app.put('/vendas/atualizar/:id', (req, res) => {
    const { id } = req.params
    const { nome_produto, categoria, quantidade, preco, forma_pagamento, nome_vendedor } = req.body
    let total_preco = quantidade * preco

    const query = `UPDATE vendas SET 
    nome_produto = ?,
    categoria = ?,
    quantidade = ?,
    preco = ?,
    total_preco = ?,
    forma_pagamento = ?,
    nome_vendedor = ?
    WHERE id_venda = ?
    `;

    try{
        connection.query(query, [nome_produto, categoria, quantidade, preco, total_preco, forma_pagamento, nome_vendedor, id]
        )
        return res.status(200).send({ message: "Usuário atualizado com sucesso!"})
    }
    catch{
        return res.status(500).send({ error: "Ocorreu um erro ao atualizar!"})
    }
})