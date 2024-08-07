//Coleção de funcionários -->>
let funcionarios = [
    {nome:"Isabela", habilitado: false},
    {nome:"Jessica", habilitado: false},
    {nome:"Jean", habilitado: false},
    {nome:"Bruno", habilitado: true},
    {nome:"Thiago", habilitado: false}
];

//Validação de CNH <--!!!-->
let cnh = false;

//estrutura de validação integrada com os dados dos funcionários -->>
for(let i = 0; i < funcionarios.length; i++){

    let funcionario = funcionarios[i];

    //validando os funcionários -->
    if(funcionario.habilitado == true){
        console.log("Funcionário habilitado encontrado: "+funcionario.nome);
        cnh = true;
        break;
    }

}

//código de negação do sistema!! (x)
if(!cnh){
    console.log("Nenhum funcionário Habilitado!");
}