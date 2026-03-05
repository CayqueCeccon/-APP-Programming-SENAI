// const pessoa = require('./data.json')

// console.log(pessoa)

// const pessoas = pessoa.filter((p) => {
//     p.salary == 3500
// })

// const pais = pessoa.map((p) => {
//     return {name: p.name, parents: p.parents}
// })

// console.log(pessoas)

const fetchData = async () => {
    const people = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await people.json()
    console.log(data)
}

fetchData();