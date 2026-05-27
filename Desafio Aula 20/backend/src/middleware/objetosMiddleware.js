export function validateGetPecaById(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if (!id || !Number.isInteger(id) || id <= 0) {
        return res.status(400).send({
            error : "Invalid id"
        })
    }

    next()
}

export function validateUpdateObjeto(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if(!id || !Number.isInteger(id) || id<=0){
        return res.status(400).send({
            error : "Invalid id"
        })
    }

    const { name, descricao, data, status } = req.body
    const dateObject = new Date(data);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    dateObject.setHours(0, 0, 0, 0);
    const statusValidos = ["Aguardando Retirada", "Entregue"]

    if(isNaN(dateObject.getTime()) || dateObject > today) {
        return res.status(400).send({
            error : "Invalid date time"
        })
    }

    if(!name || nome.trim() === '') {
        return res.status(400).send({
            error : "Invalid name object"
        })
    }

    if(!descricao || descricao.trim() === '') {
        return res.status(400).send({
            error : "Invalid description"
        })
    }

    if(status && !statusValidos.includes(status)) {
        return res.status(400).send({
            error : "Invalid status type"
        })
    }

    next()
}

export function validateDeleteObjeto(req, res, next) {
    let {id} = req.params
    id = parseInt(id)

    if(!id || !Number.isInteger(id) || id<=0){
        return res.status(400).send({
            error : "Invalid id"
        })
    }
    next()
}