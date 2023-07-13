"use strict";
// Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário.
// Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).
// Obs. Ignore vogais acentuadas, para simplificar.
/*function contarVogais(string: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let i = 0; i < string.length; i++) {
        const caractere = string[i].toLowerCase();
      if(vogais.includes(caractere))
        contador++;
    }

    return contador;
}
console.log(contarVogais("Salada"));*/
/*function totalDeVogais(texto: string) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    texto.toLowerCase().split('').forEach((cadaLetra: string) => {
        if (vogais.includes(cadaLetra)) count++;
    });

    return count;
}

const numVogais =
    console.log("Número de vogais =>", totalDeVogais("Casa"));*/
function totalDeVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return texto.toLowerCase().split('').reduce(function (count, char) {
        if (vogais.includes(char)) {
            count++;
        }
        return count;
    }, 0);
}
console.log("Número de vogais =>", totalDeVogais("Casa"));
