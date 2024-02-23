// 4 - Ler 2 valores e escrever o maior deles.

let valor1 = 9;
let valor2 = 9;

valor1 = Number(valor1);
valor2 = Number(valor2);

if (valor1 > valor2) {
    console.log(`O maior valor é: ${valor1}`);
} else if (valor2 > valor1) {
    console.log(`O maior valor é: ${valor2}`);
} else {
    console.log("Os dois valores são iguais.");
}