"use strict";
// Escreva uma função que conte quantas vezes um caractere aparece em uma string.
// Tanto o caractere quanto a string devem ser fornecidos pelo usuário.
function contarCaractere(texto, caractere) {
    let contador = 0;
    texto.toLowerCase().split('').forEach((char) => {
        if (caractere.includes(char))
            contador++;
    });
    return contador;
}
console.log("Quantidade de char => ", contarCaractere("teste", "e"));
