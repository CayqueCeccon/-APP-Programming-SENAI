class Item{
    #id
    #title
    #available

    constructor(id, title){
        if (new.target === Item){
            throw console.error("Não é possivel criar um item chamando a diretamente a classe pai");
        }
        if (!title){
            throw new Error("As caracteristicas de cadastro estão erradas, por favor verifique!");                
        }

        this.#id = id
        this.#title = title
        this.#available = true
    }
}