// 8 - Ler 3 valores e escrevê-los em ordem crescente.

let numero1 = 10;
let numero2 = 47;
let numero3 = 23;

let numeros = [numero1, numero2, numero3];
numeros.sort(function(a, b) {
  return a - b;
});
console.log(numeros);