"use strict";
//Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido.
// Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.
const inverterNumero = (num) => Number(num.toString().split('').reverse().join(''));
//console.log("Numero do parametro => ", typeof num.toString());
//return Number(numero.toString().split("").reverse().join());
//console.log(inverterNumero(1234));
console.log(inverterNumero(123));
