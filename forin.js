//(coleção de objetos)
let produtos = [
    { id: 1, nome: "pizza", preco: 50 },
    { id: 2, nome: "macarronada", preco: 25 },
    { id: 3, nome: "lasanha", preco: 45 },
    { id: 4, nome: "nhoque", preco: 30 }
];

// -> declarando o valor do desconto
let percentual_decon = 5;

// estrutura para incrementar os objetos dentro do array ->>
for(let i = 0; i < produtos.length; i++){

    let produto = produtos[i];

    //estrutura para percorrer as propriedades do objeto -->
    for(let propriedade in produto){

        //estrutura que filtra as propriedades do objeto <>
        if(propriedade == "preco"){
            let preco = propriedade;

            //calculo do desconto [<>]
            let desconto = produto[preco] - percentual_decon;
            console.log("Valor final : R$ "+desconto+",00");
        }else{
            console.log(propriedade+": "+produto[propriedade]);
        }
    }
}