const arr = [1, 2, 3, 4, 5]

const somaArr = arr.reduce((acc, value) => {
    return acc + value
}, 0)

console.log(somaArr)

const pessoas = []

const pessoa1 = {
    name: 'Arthur',
    idade: 19
}
const pessoa2 = {
    name: 'Guilherme',
    idade: 21
}
const pessoa3 = {
    name: 'Henrique',
    idade: 19
}
const pessoa4 = {
    name: 'Diego',
    idade: 18
}
const pessoa5 = {
    name: 'Ludwig',
    idade: 23
}

pessoas.push(pessoa1)
pessoas.push(pessoa2)
pessoas.push(pessoa3)
pessoas.push(pessoa4)
pessoas.push(pessoa5)

const mediaIdades = pessoas.reduce((acc, value) => {
    return acc + value.idade / pessoas.length
}, 0)

console.log(mediaIdades.toFixed(0))

const mappedArray = arr.map((arr) => {
    return arr * 2
})

console.log(mappedArray)

const mappedPessoas = pessoas.map((value) => {
    return {"name": value.name}
})

console.log(mappedPessoas)