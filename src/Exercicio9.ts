// Escreva uma função que calcule e retorne o fatorial de um número inteiro fornecido pelo usuário.

function calcularFatorial(numero: number): number {

    return numero <= 1 ? 1 : numero * calcularFatorial(numero -1);
}

console.log("Fatorial => ", calcularFatorial(6));