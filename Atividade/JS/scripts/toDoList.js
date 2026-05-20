function adicionar(){
    let novoTexto = document.getElementById("texto");
    let x = novoTexto.value.trim();

    if (x) {
        let node = document.createElement("LI");
        node.appendChild(document.createTextNode(x)); // Adiciona o texto
        document.getElementById("lista").appendChild(node);
    }
}