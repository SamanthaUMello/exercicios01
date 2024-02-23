// 7 - Ler 3 valores e escrever a soma dos 2 maiores.

let valor2 = 2;
let valor3 = 7;

if (valor1 < valor2 && valor1 < valor3) {
    console.log(`${valor2} + ${valor3} = ${valor2 + valor3}`);
} else if (valor2 < valor1 && valor2 < valor3) {
    console.log(`${valor1} + ${valor3} = ${valor1 + valor3}`);
} else if (valor3 < valor1 && valor3 < valor2) {
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
} else {
    console.log(`${valor1} + ${valor2} = ${valor1 + valor2}`);
}

