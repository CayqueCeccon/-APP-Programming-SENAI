import express, { Router } from 'express'
import { getPurchases, getPurchase, createPurchase, updatePurchase, deletePurchase } from '../controllers/RequestController.js'

const router = express.Router();

router
    .get('/view', getPurchases)
    .get('/view/:id', getPurchase)
    .post('/register', createPurchase)
    .put('/update/:id', updatePurchase)
    .delete('/delete/:id', deletePurchase)

export default router