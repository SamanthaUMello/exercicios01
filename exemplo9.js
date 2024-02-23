// 9 - Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando se este número é par ou ímpar. Ex: se (x%2=0) “x é par”, se (x%2=1) “x é impar”.

let numero = prompt("Digite um número: ");
numero = parseFloat(numero)
if (numero %2 == 0){
    console.log("Número é par.")
}
if (numero %2 ==1){
    console.log("Número é ímpar.")
}
