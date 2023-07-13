// Escreva uma função que conte quantas vezes um caractere aparece em uma string.
// Tanto o caractere quanto a string devem ser fornecidos pelo usuário.

function contarCaractere(texto: string, caractere: string): number{
    let contador = 0;

    texto.toLowerCase().split('').forEach((char: string) => {
        if (caractere.includes(char)) contador++;
    });

    return contador;
}

console.log("Quantidade de char => ", contarCaractere("teste", "e"));
