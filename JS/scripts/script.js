function somar(n1, n2){
    let numero1 = Number(document.getElementById('n1').value);
    let numero2 = Number(document.querySelector('#n2').value);

    let resposta = document.querySelector('#resposta')

    let soma = numero1 + numero2

    // console.log(numero1 + numero2)
    // alert(numero1+numero2)

    resposta.innerHTML = soma
}

function alterarImagem(){
    let imagem = document.getElementById('imagem')
    imagem.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEK3QSna9_9hluRYRpE4b1isc7OaxeYV_KGhe-E_WsDdFGLCdIS3Joc9Mjeumv-Qd8ggjFzNXXJKd02eTxhc7vLkzAIQ8mZs857txpNNrsyQ&s=10')
}