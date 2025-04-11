//variaveis principais do jogo(eu sei que não precisa colocar, so estou colocando para a senhora, no caso professora ter uma ideia)
let respostaCorreta;
let pontuação = 0;
let modoAtual = 'basico'; 
//função que inicia o jogo 
function iniciarJogo(modo) {
    modoAtual = modo;
    document.getElementById("area-jogo").style.display = "block";
    novaPergunta();
}
//função que gera nova pergunta e mostra na tela
function novaPergunta(){
    const numeros = gerarNumeros(modoAtual);
    const operaçao = escolherOperaçao();
    const perguntaTexto = '${numeros.num1} ${operaçao} ${numeros.num2}';

    respostaCorreta = calcularResposta(numeros.num1, numeros.num2, operaçao);

document.getElementById("pergunta").innerText = perguntaTexto;
document.getElementById("resposta").value = "";
document.getElementById("resultado").innerText = "";
}
//gera numeros aleatorios maiores no modo desafio 
function gerarNumeros(modo) {
    let num1 = Math.floor(Math.random() = 10) + 1;
    let num2 = Math.floor(Math,random() = 10) + 1;

    if (modo === 'desafio'){
        num1 *= 2
    num2 *= 3
}

return {num1, num2}
}
//escolhe aleatoriamente uma operaçao =, - ou *
function escolherOperaçao() {
    const operaçoes = ['+', '-', '*'];
    return operaçoes[Math.floor(Math.random() * operaçoes.length)];
}
//calcula o resultado
function calcularResposta(n1, n2, op) {
    switch (op) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case '*': return n1 * n2;

    }
}
//verifica se a resposta esta correta
function verificarResposta() {
    if (respostaUsuario === respostaCorreta) {
        document.getElementById("resposta").innerText = "Resposta Correta!";
        pontuação +=10;
    }
    else {
            document.getElementById("resultado").innerText = "Errado! A resposta correta era ${respostaCorreta}";
            pontuação -= 5;
    }
    document.getElementById("pontuaçao").innerText = "pontuação";
}