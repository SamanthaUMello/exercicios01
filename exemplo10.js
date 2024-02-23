// 10.  Leia quantos gols o TIME A marcou em uma partida e leia quantos gols o TIME B marcou. Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

console.log("Gols - time A e Time B");
let timeA = 3;
let timeB = 5;

if (timeA > timeB){
console.log(`Time A marcou ` + timeA, `gols. Vencedor!`)
};
if (timeB > timeA){
    console.log(`Time B marcou ` + timeB, `gols. Vencedor!`)
};
if (timeA == timeB){
    console.log("Empate.")
};