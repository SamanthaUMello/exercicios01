// 5 - Ler 2 valores e escrevê-los em ordem crescente.

let valor1 = 7
let valor2 = 3

let numeros = [valor1, valor2];
numeros.sort(function(a, b) {
  return a - b;
});

console.log(`Ordem crescente: ${numeros[0]}, ${numeros[1]}`);