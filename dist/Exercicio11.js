"use strict";
//Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não.
function verificarNumeroPrimo(numero) {
    return numero % 2 == 1 ? "Número primo" : "O número não é primo";
}
console.log(verificarNumeroPrimo(2));
