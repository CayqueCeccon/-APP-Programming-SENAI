class Automovel {
    #modelo
    #marca
    cor
    #ano
    motor
}

constructor(modelo, marca, cor, ano, motor){
    this.#modelo = modelo
    this.#marca = marca
    this.cor = cor
    this.#ano = ano
    this.motor = motor
}

acelerar(){
    return `O veículo ${this.#marca} ${this.#modelo} está acelerando`
}

class Moto extends Automovel {
    grau(){
        return "Olha a graça"
    }
}

const carro = new Carro("Kwid", "Renault", "Amarelo", 2018, "1.0L")
const moto = new Moto("S1000RR", "BMW", "Azul", 2025, "1000cc")

