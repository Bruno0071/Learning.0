//---Construindo uma estrutura condicional com IF TERNÁRIO--->

//verificando o dia da semana ->
let Dia = new Date();
let dia_semana = Dia.getDay();

//verificando se a loja está aberta <--open-->
let loja = (dia_semana === 0 || dia_semana === 6) ? "Funcionamos apenas de segunda à sexta! " : "Loja aberta";
//imprimindo resultado (<-->)
//console.log(loja);


//importando um input com readline-sync ->>
import input from 'readline-sync';
let nome = input.question("Digite seu nick name: ");

//---Usando o Curto-circuito ---> 
var NomeValido = nome.length > 1; 

NomeValido && console.log("Nome Aprovado: "+nome);