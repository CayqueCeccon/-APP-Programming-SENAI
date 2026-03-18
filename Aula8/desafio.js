const users = [
    { id: 1, name: 'Ana', age: 22, salary: 3500, active: true, role: 'dev' },
    { id: 2, name: 'Carlos', age: 29, salary: 7200, active: false, role: 'manager' },
    { id: 3, name: 'Marina', age: 31, salary: 6800, active: true, role: 'designer' },
    { id: 4, name: 'João', age: 19, salary: 2500, active: true, role: 'dev' },
    { id: 5, name: 'Fernanda', age: 27, salary: 4100, active: false, role: 'designer' },
    { id: 6, name: 'Lucas', age: 35, salary: 9500, active: true, role: 'manager' },
    { id: 7, name: 'Beatriz', age: 24, salary: 3900, active: true, role: 'dev' },
    { id: 8, name: 'Rafael', age: 33, salary: 7800, active: true, role: 'data_analyst' },
    { id: 9, name: 'Juliana', age: 26, salary: 5200, active: true, role: 'data_analyst' },
    { id: 10, name: 'Bruno', age: 41, salary: 11000, active: false, role: 'manager' },
    { id: 11, name: 'Camila', age: 30, salary: 6300, active: true, role: 'designer' },
    { id: 12, name: 'Thiago', age: 28, salary: 4700, active: true, role: 'dev' },
    { id: 13, name: 'Patricia', age: 37, salary: 8800, active: true, role: 'data_analyst' },
    { id: 14, name: 'Gustavo', age: 23, salary: 3100, active: false, role: 'dev' },
    { id: 15, name: 'Larissa', age: 34, salary: 7600, active: true, role: 'manager' }
]

const nameRole = users.map((user) => {
    return {name : user.name, role : user.role}
})
// console.log(nameRole)

const names = users.map((user) => {
    return {name : user.name}
})
// console.log(names)

// const namesCaps = users.map((user) => {
//     return {name : user.name.toUpperCase()}
// })
// console.log(namesCaps)

const anualSalary = users.map((user) => {
    return {name : user.name, salaryAnnual : user.salary * 12}
})
// console.log(anualSalary)

const namesAges = users.map((user) => {
    return {name : user.name, age: user.age}
})
// console.log(namesAges)

const namesSalary = users.map((user) => {
    let salary = new Intl.NumberFormat('pt-BR', {
        style: 'currency', currency: 'BRL'
    }).format(user.salary)
    return {name : user.name, "salary" : salary}
})
// console.log(namesSalary)

const seriority = users.map((user) => {
    let senioridade = ""
    if (user.age < 25) {
        senioridade = "Júnior"
    } else if (user.age < 35) {
        senioridade = "Pleno"
    } else {
        senioridade = "Senior"
    }
    return {name : user.name, "seniority" : senioridade}
})
// console.log(seriority)

const salaryCateory = users.map((user) => {
    let salaryLevel = ""
    if (user.salary < 2000) {
        salaryLevel = "Low"
    } else if (user.salary < 6000) {
        salaryLevel = "Medium"
    } else {
        salaryLevel = "High"
    }
    return {name : user.name, "salaryLevel" : salaryLevel}
})
// console.log(salaryCateory)

const namesActive = users.map((user) => {
    return {id : user.id, name : user.name, active : user.active}
})
// console.log(namesActive)

const totalSalary = users.reduce((acc, value) => {
    return acc + value.salary
}, 0)
// console.log(totalSalary)

const avgSalary = users.reduce((acc, value) => {
    return acc + value.salary / users.length
}, 0)
// console.log(avgSalary)

const avgAge = users.reduce((acc, value) => {
    return acc + value.age / users.length
}, 0)
// console.log(avgAge)

const totalActive = users.reduce((acc, value) => {
    if (value.active == true) {
        return acc + 1
    } else {
        return acc
    }
}, 0)
// console.log(totalActive)

const totalInactive = users.reduce((acc, value) => {
    if (value.active == false) {
        return acc + 1
    } else {
        return acc
    }
}, 0)
// console.log(totalInactive)

const bestSalary = users.reduce((acc, value) => {
    if (value.salary > acc) {
        return acc = value.salary
    } else {
        return acc
    }
}, 0)
// console.log(bestSalary)

const worstSalary = users.reduce((acc, value) => {
    if (value.salary < acc) {
        return acc = value.salary
    } else {
        return acc
    }
}, users[0].salary)
// console.log(worstSalary)

const salaryActive = users.reduce((acc, value) => {
    if (value.active == true) {
        return acc + value.salary
    } else {
        return acc
    }
}, 0)
console.log(salaryActive)

const container = document.getElementById("container")

function createCard(tema, pessoa) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let span = document.createElement('span')
    let hr = document.createElement('hr')
    span.innerHTML = `${pessoa}`
    h1.innerHTML = tema
    div.appendChild(h1)
    div.appendChild(span)
    div.appendChild(hr)

    return div
}

const avgSalaryActive = users.reduce((acc, value) => {
    if (value.active == true) {
        return acc + value.salary / users.length
    } else {
        return acc
    }
}, 0)
console.log(avgSalaryActive)
let card = createCard("Média salarial dos ativos", avgSalaryActive)
container.appendChild(card)

card = createCard("O total da folha salarial", totalSalary)
container.appendChild(card)

const bestSalaryActive = users.reduce((acc, value) => {
    if (value.active == true) {
        if (value.salary > acc) {
            return acc = value.salary
        } else {
            return acc
        }
    } else {
        return acc
    }
}, 0)

const bestSalaryNames = users.find(user => user.salary == bestSalaryActive)
card = createCard("O nome do usuário com maior salário entre os ativos", bestSalaryNames.name)
container.appendChild(card)

const ativos = users.filter(element => element.active == true)
const avgSalaryActiveManagers = ativos.reduce((acc, value) => {
    if (value.role == "manager" && value.active == true) {
        return acc + value.age / ativos.length
    }
    return acc
}, 0)

card = createCard("A média de idade dos managers ativos", avgSalaryActiveManagers)
container.appendChild(card)

const listNomes = users.map((value) => {
    if (value.salary > 5000) {
        return {name : value.name, role : value.role}
    }
    return
})
card = createCard("Uma lista apenas com { name, role } dos usuários que ganham mais que 5000", listNomes.name.toString())
container.appendChild(card)