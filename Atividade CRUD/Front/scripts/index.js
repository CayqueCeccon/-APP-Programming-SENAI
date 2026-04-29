const form = document.getElementById("form")
const formatt = document.getElementById("formatt")

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const nome_produto = document.getElementById("nome_produto").value
    const categoria = document.getElementById("categoria").value
    const quantidade = document.getElementById("quantidade").value
    const preco = document.getElementById("preco").value
    const forma_pagamento = document.getElementById("forma_pagamento").value
    const nome_vendedor = document.getElementById("nome_vendedor").value
    console.log(nome_produto, categoria, quantidade, preco, forma_pagamento, nome_vendedor)

    const response = await fetch('http://localhost:8080/vendas/registro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome_produto: nome_produto,
            categoria: categoria,
            quantidade: quantidade,
            preco: preco,
            forma_pagamento: forma_pagamento,
            nome_vendedor: nome_vendedor
        })
    })

    const data = await response.json();
    console.log(data)
    carregarUsuarios();
})

async function carregarUsuarios(){
    const response = await fetch('http://localhost:8080/vendas');
    let vendas = await response.json();

    const tbody = document.getElementById('listaVendas');
    tbody.innerHTML = ""
    vendas = vendas.vendas
    vendas.forEach(venda => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${venda.nome_produto}</td>
            <td>${venda.categoria}</td>
            <td>${venda.quantidade}</td>
            <td>${venda.preco}</td>
            <td>${venda.total_preco}</td>
            <td>${venda.data_venda}</td>
            <td>${venda.forma_pagamento}</td>
            <td>${venda.nome_vendedor}</td>
            <td>
                <button onclick="deletarUsuario(${venda.id_produto})">Deletar</button>
                <button onclick="atualizarUsuario(${venda.id_produto})">Atualizar</button>
            </td>
        `
        tbody.appendChild(tr)
    });
}

async function deletarUsuario(id) {
    const response = await fetch(`http://localhost:8080/vendas/deletar/${id}`, {
        method: 'DELETE',
    })
    carregarUsuarios();
}

async function atualizarUsuario(id) {
    const nome_produtoatt = document.getElementById("nome_produtoatt").value
    const categoriaatt = document.getElementById("categoriaatt").value
    const quantidadeatt = document.getElementById("quantidadeatt").value
    const precoatt = document.getElementById("precoatt").value
    const forma_pagamentoatt = document.getElementById("forma_pagamentoatt").value
    const nome_vendedoratt = document.getElementById("nome_vendedoratt").value

    const response = await fetch(`http://localhost:8080/vendas/atualizar/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            nome_produto: nome_produtoatt,
            categoria: categoriaatt,
            quantidade: quantidadeatt,
            preco: precoatt,
            forma_pagamento: forma_pagamentoatt,
            nome_vendedor: nome_vendedoratt
        })
    })

    carregarUsuarios()
}

window.onload = () => {
    carregarUsuarios();
}