
/*
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
*/

var pessoa = {
    nome: 'Jennifer',
    idade: 20,
    profissao: 'Programadora',
}

var quadrado = {
    lado: 4,
    area: function(lado){
        return lado * lado;
    },
    perimetro: function (lado){
        return lado * lado;
    },
}

console.log(quadrado.perimetro(5));

console.log(Math.random());