const carros = require('./data.json')

// console.log(carros)

const filterCarros2023 = carros.filter((value) => {
    return value.year == 2023;
})

// console.log(filterCarros2023)

const filterCarrosHighHorsePower = carros.filter((c) => {
    return c.horsepower > 150;
})

// console.log(filterCarrosHighHorsePower)

const filterCarrosSomaPrecos = carros.reduce((acc, value) => {
    return acc + value.price_brl
}, 0)

// console.log(filterCarrosSomaPrecos)

const filterCarrosPrecoMedio = filterCarrosSomaPrecos / carros.length

// console.log(filterCarrosPrecoMedio)

const carroMaisBarato = carros.reduce((min, car) =>
  car.price_brl < min.price_brl ? car : min
)

// console.log(carroMaisBarato)

const marcas = carros.map(car => car.brand)

// console.log(marcas)

const eletricos = carros.filter(car => car.fuel == "Electric")

// console.log(eletricos)

const carrosEconomicos = carros.filter(car => car.city_km_l > 12)

// console.log(carrosEconomicos)

const pesadao = carros.reduce((max, car) => 
    car.weight_kg > max.weight_kg ? car : max
)

// console.log(pesadao)

const suvs = carros.filter(car => car.category == "SUV")

// console.log(suvs)