import { response } from "express";

const purchases  = [
    {
        client: "Ludwig",
        itens: [{name: "Banana", price: 50, qty: 2}, {name: "Maçã", price: 50, qty: 1}],
        status: "Active",
        total: 150
    },
    {
        client: "Henrique",
        itens: [{name: "Pá Grande", price: 75, qty: 2}, {name: "Formol", price: 25, qty: 4}],
        status: "Credit",
        total: 250
    },
    {
        client: "Lunim",
        itens: [{name: "Cutelo", price: 20, qty: 2}, {name: "Mala de Viagem Grande", price: 60, qty: 2}, {name: "Salgadinho sem Glutem e sem Lactose", price: 10, qty: 4}],
        status: "Credit",
        total: 200
    }]

function calcularPrecoTotal(itens) {
    return itens.reduce((total, item) => total + item.price * item.qty, 0);
    }

export const getPurchases  = (req, res) => {
    res.status(200).send(purchases)
}

export const getPurchase  = (req, res) => {
    const { id } = req.params
    res.status(200).send(purchases[id])
}

export const createPurchase = (req, res) => {
    const { client, itens, status } = req.body

    if (!itens || !status || typeof status !== "string" || !client || typeof client !== 'string' || client.trim() === '') {
        return res.status(400).send({ error: "Cadastro inválido" });
    }

    const totalPurchare = calcularPrecoTotal(itens)

    try {
        purchases.push({client : client.trim(), itens: itens, status: status, total: totalPurchare}); // adiciona apenas o valor da string
        return res.status(200).send({ response: `Compra do cliente ${client} registrado com sucesso!` });
    } catch {
        return res.status(500).send({ error: "Internal server error" });
    }
}

export const updatePurchese = (req, res) => {
    const { client, itens, status } = req.body;
    const { id } = req.params;

    const index = parseInt(id, 10);

    if (
        !itens ||
        !status ||
        typeof status !== "string" ||
        !client ||
        typeof client !== "string" ||
        client.trim() === ""
    ) {
        return res.status(400).send({ error: "Cadastro inválido" });
    }

    if (isNaN(index) || index < 0 || index >= purchases.length) {
        return res.status(400).send({ error: "ID inválido" });
    }

    const totalPurchase = calcularPrecoTotal(itens);

    purchases[index] = {
        client,
        itens,
        status,
        total: totalPurchase
    };

    return res.status(200).send({
        response: `Compra do cliente "${client}" atualizada com sucesso!`,
        purchase: purchases[index]
    });
};

export const deletePurchase = (req, res) => {
    const { id } = req.params
    const index = parseInt(id, 10);

    if (isNaN(index) || index < 0 || index >= users.length) {
        return res.status(400).send({ error: "ID inválido" });
    }

    users.splice(index, 1)
    return res.status(200).send({ response: `Compra deletada com sucesso!` });
}