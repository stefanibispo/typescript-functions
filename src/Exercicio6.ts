//Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido.
// Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578.


const inverterNumero = (num: number): number => Number(num.toString().split('').reverse().join(''));

console.log("Número invertido =>", inverterNumero(123));





