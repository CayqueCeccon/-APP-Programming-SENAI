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

function insertData(data = [], id) {
    let container = document.getElementById(id)

    data.forEach(e => {
        let father = document.createElement('div')
        let span = document.createElement('span')

        span.innerHTML = `${e.id} | ${e.name}`
        father.appendChild(span)
        container.appendChild(father)
    })

}

const filteredUsersActives = users.filter((u) => u.active == true)
insertData(filteredUsersActives, 'actives')
const filteredUsersInactives = users.filter((u) => u.active == false)
insertData(filteredUsersInactives, 'inactives')
const filteredOnlyDevs = users.filter((u) => u.role == 'dev')
insertData(filteredOnlyDevs, 'devs')
const filteredOnlyDesigns = users.filter((u) => u.role == 'designer')
insertData(filteredOnlyDesigns, 'designers')
const filteredOnlyManagers = users.filter((u) => u.role == 'manager')
const filteredOnlyDataAnalysts = users.filter((u) => u.role == 'data_analyst')
const filterSalaryHigh = users.filter((u) => u.salary > 5000)
const filterSalaryLow = users.filter((u) => u.salary < 4000)
const filterAgeHigh = users.filter((u) => u.age > 30)
const filterAgeLow = users.filter((u) => u.age < 25)
const filterActiveDevs = users.filter((u) => u.role == 'dev' && u.active == true)
const filterSalaryDevs = users.filter((u) => u.role == 'dev' && u.salary > 4000)
const filterOldManager = users.filter((u) => u.role == 'manager' && u.age > 30)
