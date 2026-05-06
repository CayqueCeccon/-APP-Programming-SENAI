import express, { Router } from 'express'
import { getPeople, createUser, updateUser, deleteUser } from '../controllers/UserController.js'

const router = express.Router();

router
    .get('/view', getPeople)
    .post('/register', createUser)
    .put('/update/:id', updateUser)
    .delete('/delete/:id', deleteUser)

export default router