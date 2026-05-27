import { response } from "express"
import connection from "../database/db.js"
import { parse } from "dotenv"

export function view(req, res) {
    connection.query(`SELECT * FROM itens`,
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send(response)
        }
    )
}

export function viewById(req, res) {
    let { id } = req.params
    id = parseInt(id)

    connection.query(`SELECT * FROM itens WHERE id = ?`,
        [id], (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send(response)
        })
}

export function register(req, res) {
    const { name, descricao, local,
        data, status } = req.body

    connection.query(`INSERT INTO itens 
                    VALUES
                    (default, ?, ?, ?, ?, ?, ?)`,
        [name, descricao, local, data, status],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send({
                sucess: "Product registered sucesfully"
            })
        })
}

export function update(req, res) {
    let { id } = req.params
    id = parseInt(id)

    if (id <= 0 || isNaN(id)) {
        return res.status(400).send({
            error: "Invalid provided index"
        })
    }

    const { name, descricao, local, data, status } = req.body

    connection.query(`UPDATE itens
                    SET
                    objeto = ?,
                    descricao = ?,
                    local_ = ?,
                    data_ = ?,
                    status_ = ?
                    WHERE
                    id = ?`,
        [name, descricao, local, data, status, id],
        (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send({
                sucess: "Product updated sucesfully"
            })
        })
}

export function erase(req, res) {
    let { id } = req.params
    id = parseInt(id)

    if (id <= 0 || isNaN(id)) {
        return res.status(400).send({
            error: "Invalid provided index"
        })
    }

    connection.query(`DELETE FROM itens
                    WHERE id = ?`,
        [id], (err, response) => {
            if (err) {
                return res.status(500).send({
                    error: "Internal server error"
                })
            }
            return res.status(200).send({
                sucess: "Product deleted sucesfully"
            })
        })
}