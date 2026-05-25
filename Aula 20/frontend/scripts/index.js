let data = []
const server = "http://localhost:8080"
const form = document.getElementById('formulario')

async function fetchData() {
    const response = await fetch(`${server}/inventory`)
    data = await response.json()
}

function setTableData() {
    const table = document.getElementById('table-data');

    table.innerHTML = ""

    data.forEach((e) => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${e.nome_peca}</td>
            <td>${e.codigo_peca}</td>
            <td>${e.fornecedor}</td>
        `;

        table.appendChild(tr);
    });
}

form.addEventListener('submit', async(e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const codigo = document.getElementById('codigo').value
    const fornecedor = document.getElementById('fornecedor').value
    const quantidade = document.getElementById('quantidade').value
    const preco_unitario = document.getElementById('preco_unitario').value
    const estoque = document.getElementById('estoque').value

    const dataToSend = {
        name: nome,
        code: codigo,
        supplier: fornecedor,
        qty: quantidade,
        price: preco_unitario,
        stock: estoque
    }

    console.log(dataToSend)
  
        await fetch(`${server}/inventory/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        })

        await fetchData()
        setTableData()
    
})

addEventListener('load', async () => {
    await fetchData();
    setTableData();
})