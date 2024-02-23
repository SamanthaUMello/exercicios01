// 10.  Leia quantos gols o TIME A marcou em uma partida e leia quantos gols o TIME B marcou. Escrever o nome do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.

console.log("Gols time A e Time B");
let timeA = prompt("Quantos gols o timeA marcou? ");
let timeB = prompt("Quantos gols o timeB marcou? ");
timeA = Number(timeA);
timeB = Number(timeB);

if (timeA > timeB){
console.log(`Time A marcou ` + timeA, ` gols. Vencedor!`)
};
if (timeB > timeA){
    console.log(`Time B marcou ` + timeB, ` gols. Vencedor!`)
};
if (timeA == timeB){
    console.log("Empate.")
};