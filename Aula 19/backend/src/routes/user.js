import express, { Router } from 'express'
import { getPeople, createUser } from '../controllers/UserController.js';
import { validateRegister } from '../middlewares/userMiddleware.js';

const router = express.Router();

router
    .get('/users', getPeople) //localhost:8080/user/users
    .post('/register', validateRegister, createUser)

export default router