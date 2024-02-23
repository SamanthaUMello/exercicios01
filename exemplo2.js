// 2 - Ler as notas da 1a e 2a avaliação de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que se a nota for igual ou maior que 7 o aluno é aprovado). Escrever também a média calculada.

let nota1 = 7.0;
let nota2 = 9.0;

// Exibindo as notas
console.log("1ª Avaliação: ", nota1);
console.log("2ª Avaliação: ", nota2);

let media = ((nota1 + nota2) / 2);

if (media >= 7) {
    console.log(`Parabéns! Você foi aprovado com média ${media}`);
} else {
    console.log(`Você foi reprovado. Sua média foi ${media}`);
}