const dados = []

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
        dados.push({id, title, available: true})
    }

    getId(){
        return this.#id
    }

    getTitle(){
        return this.#title
    }

    setTitle(title){
        return !title ? console.error("Erro ao setar titulo!") : this.#title = title
    }

    verifyUserActivity(){
        return this.#available
    }

    emprestar(){
        return this.#available ? this.#available = false : console.log("Titulo Indisponível!")
    }

    devolver(){
         return this.#available = true
    }

}

class Book extends Item{

    author

    constructor(id, title, author){
        if (!author){
            throw new Error("O autor não pode estar vazio!")
        }
        super(id, title)

    }
}

class Movie extends Item{
    duration

    constructor(id, title, duration){
        if (duration < 0){
            throw new Error("O deve ter a duração maior que 0!")
        }
        super(id, title)

    }
}

