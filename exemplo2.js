// 2 - Ler as notas da 1a e 2a avaliação de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que se a nota for igual ou maior que 7 o aluno é aprovado). Escrever também a média calculada.

let nota1 = prompt("Digite a nota da 1ª avaliação:");
let nota2 = prompt("Digite a nota da 2ª avaliação:");

nota1 = Number(nota1);
nota2 = Number(nota2);

let media = (nota1 + nota2) / 2;

if (media >= 7) {
    console.log(`Parabéns! Você foi aprovado com média ${media}.`);
} else {
    console.log(`Você foi reprovado. Sua média foi ${media}.`);
}