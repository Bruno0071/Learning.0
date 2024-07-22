//Definindo o mês ->
let date = new Date();
let mes = date.getMonth();

//construindo estrutura condicional <---->
switch(mes){
    case 0:
    case 1:
    case 2:
        if(mes == 0){
            console.log("Janeiro: Verão");

        }else if(mes == 1){
            console.log("Fevereiro: Verão");

        }else{
            console.log("Março: Verão");
        }
    break;

    case 3:
    case 4:
    case 5:
        if(mes == 3){
            console.log("Abril: Outono");

        }else if(mes == 4){
            console.log("Maio: Outono");

        }else{
            console.log("Junho: Outono");
        }
    break;

    case 6:
    case 7:
    case 8:
        if(mes == 6){
            console.log("Julho: Inverno");

        }else if(mes == 7){
            console.log("Agosto : Inverno");

        }else{
            console.log("Setembro : Inverno");
        }
    break;

    case 9:
    case 10:
    case 11:
        if(mes == 9){
            console.log("Outubro: Primavera");

        }else if(mes == 10){
            console.log("Novembro: Primavera");

        }else{
            console.log("Dezembro: Primavera");
        }
    break;

    //mês não identificado --->
    default:
        console.log("Mês inválido");
    break;
}