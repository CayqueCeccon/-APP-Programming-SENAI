import { response } from "express";

const people = [{name: "Artur"}, {name: "Pedro"}, {name: "Lunim"}]

export const getPeople = (req, res) => {
    res.status(200).send(people)
}

export const createUser = (req, res) => {
    const { name } = req.body

    if (!name || typeof name !== 'string' || name.trim() === '') {
        return res.status(400).send({ error: "Nome inválido" });
    }

    try {
        users.push(name.trim()); // adiciona apenas o valor da string
        return res.status(200).send({ response: `Usuário ${name} registrado com sucesso!` });
    } catch {
        return res.status(500).send({ error: "Internal server error" });
    }
}

export const updateUser = (req, res) => {
    const { name } = req.body
    const { id } = req.params
    const index = parseInt(id, 10); //Dessa forma eu garanto que o index (id fornecido no link) seja um tipo inteiro, normalmente ele vem como tipo String.

    if (isNaN(index) || index < 0 || index >= users.length) {
        return res.status(400).send({ error: "ID inválido" });
    }

    users[index] = name;
    return res.status(200).send({response: `Usuário ${name} atualizado com sucesso!`});
}

export const deleteUser = (req, res) => {
    const { id } = req.params
    const index = parseInt(id, 10);

    if (isNaN(index) || index < 0 || index >= users.length) {
        return res.status(400).send({ error: "ID inválido" });
    }

    users.splice(index, 1)
    return res.status(200).send({ response: `Usuário deletado com sucesso!` });
}