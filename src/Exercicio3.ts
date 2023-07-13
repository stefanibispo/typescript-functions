// Escreva uma função que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F) para Celsius (C).
// Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e multiplique o resultado por 0,5556 (ou 5/9).

const converterGraus = (temperaturaFahrenheit: number): number => (temperaturaFahrenheit - 32) * 5/9;

console.log("A temperatura em graus Celsius é: ", converterGraus(32));