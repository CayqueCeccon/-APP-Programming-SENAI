// Polimorfismo

class Animal{
    #nome_cientifico
    #peso
    #alimentacao
    #locomocao

    constructor(nome_cientifico, peso, alimentacao){
        this.#nome_cientifico = nome_cientifico
        this.#peso = peso
        this.#alimentacao = alimentacao
    }

    emitirSom(){
        console.log("Emitindo som...")
    }

    locomover(){
        console.log("Animal se locomovendo")
    }

}

class Cachorro extends Animal{
    emitirSom(){
        console.log("Au au")
    }
}

class Gato extends Animal{
    emitirSom(){
        console.log("Miau Miau")
    }
}

const dog = new Cachorro("Dogos latindus", 20, "Carnívoro")
const cat = new Gato("Gatilis Miandus", 5, "Qualquer coisa")

dog.emitirSom()
cat.emitirSom()