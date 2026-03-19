const users = []

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
        if (!name ||
            !(email.includes('@')) ||
            password.lenght < 6){
                throw new Error("As caracteristicas de cadastro estão erradas, por favor verifique!");                
        }
        this.#id = id
        this.#name = name
        this.#email = email
        this.#password = password
        this.#active = true
        users.push({id, name, email, password, active: true})
    }

    getId(){
        return this.#id
    }

    getNome(){
        return this.#name
    }

    setName(name){
        return !name ? console.error("Erroa ao setar nome") : this.#name = name
    }

    getEmail(){
        return this.#email
    }

    setEmail(email){
        return !email.includes('@') ? console.error("Erro ao setar email") : this.#email = email
    }

    setSenha(senha){
        return senha.lenght < 6 ? console.error("Erro ") : this.#password = password
    }

    verifyPassword(password){
        return password === this.#password ? false : true
    }

    changeUserActivity(){
        return this.#active === true ? this.#active = false : this.#active = true
    }

    verifyUserActivity(){
        return this.#active
    }

}

   

class Client extends User{
    constructor(id, name, email, password){
        super(id, name, email, password)
    }

    showData(){
        return {
            id: this.getId(),
            name: this.getNome(),
            email: this.getEmail(),
            active: this.verifyUserActivity()
        }
    }

    changeData(name, email, password){
        if(this.verifyPassword(password) == true){
            return console.error("Não é possível alterar a senha pela mesma")
        }
        else{
            this.setName(name)
            this.setEmail(email)
            this.setSenha(password)
        }
    }
}

const c1 = new Client(1, "Diego", "diego@gmail.com", "123456")
console.log(c1.showData());
const a1 = new Admin(1, "Admin", "admin@gmail.com", "123456")
console.log(a1.showAllUsers());