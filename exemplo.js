
// const e let criam variavéis.
const nome = "Samantha";
// console.log realizam o print na tela.
console.log(nome);

// Criar duas variaveis com nomes:
// num1 e num2
// atribuir valores aleatórios entre 0 e 100
// imprimir no console log as quatro operações básicas da matemática
// exemplo de saída no terminal
// adição: 
// subtração: 
// divisão: 
// multiplicação: 

let num1 = Math.floor(Math.random()*100);
let num2 = Math.floor(Math.random()*100);

// Math.random()método estático retorna um número pseudoaleatório de ponto flutuante que é maior ou igual a 0 e menor que 1, com distribuição aproximadamente uniforme nesse intervalo.
// Math.floor é usada para arredondar o número passado como parâmetro para seu inteiro mais próximo, levando como base o valor menor.   

console.log("Valor de soma: ", num1, "+ " + num2, " =", (num1 + num2));
console.log("Valor de subtração: ", num1, "- " + num2, " =", (num1 - num2));
console.log("Valor de divisão: ", num1, "/ " + num2, " =", (num1 / num2).toFixed(2));
console.log("Valor de multiplicação: ", num1, "x " + num2, " =", (num1 * num2));

// toFixed()formata um número utilizando notação de ponto fixo.

//https://dontpad.com/eltonsenai