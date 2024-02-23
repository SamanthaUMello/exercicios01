// 3 - Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

let anoAtual = 2024;
let anoNascimento = 2000;

anoAtual = Number(anoAtual);
anoNascimento = Number(anoNascimento);

let idade = anoAtual - anoNascimento;

if (idade >= 16) {
    console.log(`Você tem ${idade} anos. Você pode votar este ano.`);
} else {
    console.log(`Você tem ${idade} anos. Você não pode votar este ano.`);
}