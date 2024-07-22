/*
Um objeto literal deve ser utilizado para guardar dados
de um único domínio (contexto). Se mais domínios (contextos)
estiverem envolvidos, devem ser criados objetos literais para cada um deles
*/ 
var produto = {
    nome: "Placa de vídeo RTX 3060 6Gb Dual Fan Galaxy",
    preco: 1700.00,
    id: 4
}; 

var cliente = { 
    nome: "Bruno Santiago Rodrigues",
    telefone: "(55) 77777-0000",
    saldo: 1000.00,
    id: 77
};

//calculo da compra ->
let efetuarCompra = cliente.saldo >= produto.preco;
let saldo = cliente.saldo -  produto.preco;

//estrutura condicional.
if( efetuarCompra === true){
    console.log("\nCompra aprovada \n"+ produto.nome +"\n");
    console.log(cliente.saldo + " - " + produto.preco + " = " + saldo + "\nsaldo bancario: " + saldo);

}else{
    console.log("\nCompra Negada\nSaldo insuficiente\n");
}
