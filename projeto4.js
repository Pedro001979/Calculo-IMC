/*Este é um programa que Calcuala o IMC (Indice de Massa Corporal).*/

const entradaAltura = require('prompt-sync') ({sigint: true});
let altura;
altura = entradaAltura ("Digite Sua Altura: ");

const entradaPeso = require('prompt-sync') ({sigint: true});
let peso;
peso = entradaPeso ("Digite Seu Peso: ");

const calculo =peso / Math.pow(altura, 2);
console.log(calculo.toFixed(2))

if (calculo < 18.5){
    console.log ('o Individuo está Abaixo do Peso');
}else if(calculo >= 18.5 && calculo <= 25){ 
    console.log ('O Individuo está no Peso Ideal');
}else if(calculo >= 25 && calculo <= 30){
    console.log('O Individuo está Acima do Peso');
}else if(calculo >= 30 && calculo <= 40){
    console.log('Individuo Obeso');
}else if(calculo > 40){
    console.log('Individuo com Obesidade Morbida');
}   