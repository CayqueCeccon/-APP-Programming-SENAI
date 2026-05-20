// Aqui eu crio variaveis do tipo lista para guardar os dados
let users = []
let posts = []

// Uma função assíncrona que busca dados na internet
async function fetchData() {

    // await: Faz o código esperar a resposta chegar antes de continuar
    // fetch: Busca os dados da URL
    const userData = await fetch('https://jsonplaceholder.typicode.com/users')
    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')
    // Depois de conseguir os dados ele define nas variaveis
    // Obs: A variavel ainda não é uma lista pronta, ela é apenas a resposta de requisição da API

    // Aqui estamos transformando a resposta, que está na variaveis acima, no formato JSON, ou seja, um formato que o JavaScript consegue usar como array
    users = await userData.json()
    posts = await postsData.json()

    // Depois disso, 'users' passa a ter algo parecido com:
    //[
        // { id: 1, name: "Leanne Graham", ... },
        // { id: 2, name: "Ervin Howell", ... }
    //]
}

async function setData(){
    // Aqui chamamos a função fetchData para carregar os dados primeiro
    // O await garante que os dados sejam carregados antes de continuarmos
    await fetchData();

    // Container é onde vai ficar todas as inserções de posts que os usuários fizeram (Quadrado geral, quadro)
    const container = document.getElementById('posts')

    // O forEach percorre todos os usuários do array 'users', um por um
    users.forEach( user => {
        // Aqui ele só pega os posts do usuário que ele está percorrendo no momento
        // A função do filter é criar um novo array com apenas os elementos que passam na condição
        const userPosts = posts.filter(post => post.userId === user.id)

        // Guarda o nome do usuário no <h2></h2>
        let html = `<h2>${user.name}</h2>`

        // Percorre os posts do usuário, ou seja, para cada post do usuário atual, ele executa o bloco abaixo
        userPosts.forEach(post => {
            // O += significa: “pegue o que já existe em html e adicione mais isso aqui”
            html += `
                <div style="margin-left:20px;">
                    <h4>${post.title}</h4>
                    <p>${post.body}</p>
                </div>
            `
        })
        // Depois que terminou de montar todo o HTML daquele usuário, você joga esse conteúdo dentro do container.
        container.innerHTML += html
    })


}
// Executa a função
setData();