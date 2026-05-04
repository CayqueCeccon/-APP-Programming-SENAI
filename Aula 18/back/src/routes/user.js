import express, { Router } from 'express'

const router = express.Router();
const users = ["Diego", "Cayque", "Lunim", "Henrique"]

router
    .get('/view', (req, res) => {
        res.send(users)
    })
    .post('/register', (req, res) => {
        const { name, lastname } = req.body
        try{
            users.push({name, lastname})
            return res.status(200).send({response: `Usuário ${name} ${lastname} registrado com sucesso!`})
        }
        catch{
            return res.status(500).send({error : "Internal server error"})
        }
    })
    .put('/update/:id', (req, res) => {
        const { name, lastname } = req.body
        try{

        }
        catch{

        }
    })
    .delete('/delete/:id', (req, res))

export default router