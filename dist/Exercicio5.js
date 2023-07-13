"use strict";
// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido.
const calcularAreaEPerimetroCirculo = (raio) => {
    const area = Math.PI * raio ** 2;
    const perimetro = 2 * Math.PI * raio;
    return { area, perimetro };
};
console.log("Area e perímetro do círculo => ", calcularAreaEPerimetroCirculo(5));
