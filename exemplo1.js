// 1 – Ler um valor e escrever se é positivo, negativo ou zero.

let valor = Math.random() * 100 - 50;

valor = Math.round(valor);

if (valor > 0) {
    console.log(`Seu número ${valor}, é positivo.`);
} else if (valor < 0) {
    console.log(`Seu número ${valor} é negativo.`);
} else {
    console.log('O número é zero.');
}