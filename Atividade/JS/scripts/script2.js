function alternarCor(e){

    // Atualiza o backgroundcolor de acordo com o valor 
    // que está no argumento "e", que no nosso caso é a variavel "cor"
    square.style.backgroundColor = e.target.value
   
}

// Estou declarando/referenciando a variavel "square" 
// como o id "q1" que está referenciado no html
let square = document.getElementById('q1')
// Aqui eu declaro/referencio a variavel "cor"
let cor = document.getElementById('cor')

// Toda vez que acontece algum evento no botão/input
// cor ele realiza uma atualização usando a função "alternarCor"
cor.addEventListener('input', alternarCor)