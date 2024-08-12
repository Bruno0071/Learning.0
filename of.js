let cursos_idiomas = [
    { nome: "Inglês", preco: 2500, carga_horaria: 160 },
    { nome: "Espanhol", preco: 1500, carga_horaria: 110 },
    { nome: "Francês", preco: 3600, carga_horaria: 200 },
    { nome: "Chinês", preco: 5500, carga_horaria: 400 },
    { nome: "Alemão", preco: 3800, carga_horaria: 230 }
];

console.log("\n")

for(let cursos of cursos_idiomas){
    
    let nome_curso = cursos.nome;
    let preco_curso = cursos.preco
    let carga_hr =  cursos.carga_horaria;
    
    let valorHora = preco_curso / carga_hr;
    
    console.log("Nome do curso: "+nome_curso);
    console.log("Valor do curso: "+preco_curso);
    console.log("Carga Horaria do curso: "+carga_hr+" Horas");
    
    if(valorHora >= 15){
        console.log("Valor da Hora/Aula é superior ou igual a R$: 15,00");
    }else{
        console.log("Valor da Hora/Aula é inferior a R$: 15,00");
    }

    console.log("\n");
}