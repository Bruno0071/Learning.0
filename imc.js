//criação de um objeto litera
let aluno_acad = {
    nome:"Micael",
    altura: 1.70,
    peso: 70.00,
    id: 10
};

//calculo do IMC  -> Peso/ (altura * altura)
let imc =  (aluno_acad.peso / (aluno_acad.altura * aluno_acad.altura)).toFixed(2);

//Estruturas condicinais ->
if(imc < 18.5){
    console.log("\nVocê está abaixo do peso!\nSeu IMC é: "+imc+"\n");
}else if(imc >= 18.5 && imc <= 24.99){
    console.log("\nVocê  está no peso ideal, parabéns!\nSeu imc é: "+imc+"\n");
}else{
    console.log("\nVocê está acima do pesos!!\nSeu IMC é: "+imc+"\n");
}