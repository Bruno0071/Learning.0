//Fazendo import do readline-sync ->>
import input from "readline-sync";

console.log("\nCalculadora de soma de dois números\n");

//variáveis de input --> apelido.question -#-->
let x = input.question("Digite o primeiro Valor: ");
let y = input.question("\nDigite o segundo valor: ");

//Calculando números usando NUMBER para converter de String para NUMBER
let soma = Number(x) - Number(y);
//<-----imprimindo----->
console.log(x+" + "+y+" = "+soma);