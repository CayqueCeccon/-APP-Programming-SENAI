import express, {response, Router} from "express"
import * as control from "../../controllers/objetosController.js"
import * as middle from "../../middleware/objetosMiddleware.js"

const router = express.Router()

router
    .get('/', control.view) // OKAY
    .get('/:id', middle.validateGetPecaById, control.viewById) // OKAY
    .post("/register", control.register) // OKAY
    .put("/update/:id", middle.validateUpdateObjeto, control.update) // OKAY
    .delete("/delete/:id", middle.validateDeleteObjeto, control.erase) // OKAY

export default router