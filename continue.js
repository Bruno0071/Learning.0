let funcionarios = [
    {nome: "Amanda", habilitado: false},
    {nome: "Osmar", habilitado: true},
    {nome: "Thiago", habilitado: false},
    {nome: "Bruno", habilitado: true},
    {nome: "Jean", habilitado: false}
];

var cnh = false;

for(let i = 0; i < funcionarios.length; i++){

    let funcionario = funcionarios[i];
    if(funcionario.habilitado == false){
        continue;
    }

    cnh = true;
    console.log("Funcionário encontrado: "+funcionario.nome);
}