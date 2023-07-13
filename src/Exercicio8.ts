// Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e
// taxa de juros mensal, fornecidos pelo usuário.
// Use a fórmula: M = C * (1+i)t
// Onde:
// C = Capital inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento, em meses
// Exiba o resultado com duas casas decimais.

//Opção1 de código
const calcularMontanteInvestimento = (capitalInicial: number, tempoDoInvestimentoMeses: number, taxaJurosMensal: number): number =>
    parseFloat((capitalInicial * Math.pow(1 + taxaJurosMensal / 100, tempoDoInvestimentoMeses)).toFixed(2));
    //Lembrete: Math.pow => retorna base elevada ao expoente. Math.pow(base, expoente)

console.log("Retorno do investimento opção2 de código => ", calcularMontanteInvestimento(1000.00, 12, 0.5));


//Opção2 de código
function calcularMontanteInvestimento2(capitalInicial: number, tempoDoInvestimentoMeses: number, taxaJurosMensal: number): number{

    return parseFloat((capitalInicial * Math.pow(1 + taxaJurosMensal / 100, tempoDoInvestimentoMeses)).toFixed(2));
}

console.log("Retorno do investimento opção2 de código => ",calcularMontanteInvestimento2(1000.00, 12, 0.5));