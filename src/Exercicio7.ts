// Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário.
// Por exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra).
// Obs. Ignore vogais acentuadas, para simplificar.


//Opção1 de código

function totalDeVogais(texto: string) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    texto.toLowerCase().split('').forEach((cadaLetra: string) => {
        if (vogais.includes(cadaLetra)) count++;
    });

    return count;
}
console.log("Número de vogais opção1 de código =>", totalDeVogais("existente"));


//Opção2 de código
function totalDeVogais2(texto: string) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];

    return texto.toLowerCase().split('').reduce(function(count, char) {
        if (vogais.includes(char)) {
            count++;
        }
        return count;
    }, 0);
}
console.log("Número de vogais opção2 de código =>", totalDeVogais2("Existe"));


//Opção3 de código
function contarVogais3(string: string): number {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;

    for (let i = 0; i < string.length; i++) {
        const caractere = string[i].toLowerCase();
      if(vogais.includes(caractere))
        contador++;
    }

    return contador;
}
console.log("Número de vogais opção3 de código =>", contarVogais3("Existir"));



