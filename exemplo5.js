// 5 - Ler 2 valores e escrevê-los em ordem crescente.

let valor1 = prompt("Digite o primeiro valor: ");
let valor2 = prompt("Digite o segundo valor: ");

let valores = [Number(valor1), Number(valor2)];

valores.sort(valor1, valor2);

console.log(`Ordem crescente: ${valores[0]}, ${valores[1]}`);