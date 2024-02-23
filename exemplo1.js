// 1 – Ler um valor e escrever se é positivo, negativo ou zero.

let valor = prompt('Digite um número: ');
let numero = Math.sign(Number(valor));

if (numero > 0) {
    console.log(`Seu número ${valor} é positivo.`);
} else if (numero < 0) {
    console.log(`Seu número ${valor} é negativo.`);
} else {
    console.log('O número é zero.');
}