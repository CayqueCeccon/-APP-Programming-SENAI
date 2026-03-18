class User{
    #id
    #name
    #email
    #password
    #active

    constructor(id, name, email, password){
        if (new.target === User){
            throw console.error("Não é possivel instanciar diretamente com o pai");
        }
        if (name.lenght == 0 ||
            !(email.includes('@')) ||
            password.lenght < 6){
                throw new Error("As caracteristicas de cadastro estão erradas, por favor verifique!");                
        }
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = true
    }

    get name() {
        return "Eu sou o " + String(this.#name);
    }

    set name(value) {
        if (value.lenght == 0){
            throw new Error("Nome tá tudo errado!")
        }
        this.#name = value
    }

}

class Admin{

}

class Client extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)
    }
}

// cayque = new User()
cayque2 = new Client("69", "Lunim", "lunimbr@gmail.com", "pipocavoadora")

console.log(cayque2.name)