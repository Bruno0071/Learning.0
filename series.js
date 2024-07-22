//coleção de objetos -> Nome, horario e sinopse das séries.
let programacao_series = [
    { nome: "Dark",                   horario: "22h",     sinopse: "O desaparecimento de crianças na cidade alemã de Winden remete a acontecimentos idênticos ocorridos há 33 anos e 66 anos."},
    { nome: "Breaking Bad",           horario: "21h",     sinopse: "Um professor de química se transforma quando descobre ter um câncer terminal. Daí ele usa suas habilidades a favor do crime"},
    { nome: "Fargo",                  horario: "22h",     sinopse: "Uma sequência de crimes saem errado e são investigados por uma detetive."},
    { nome: "Lost",                   horario: "20h",     sinopse: "Um avião cai em uma ilha deserta e logo um grupo de passageiros precisa lutar para sobreviver." },
    { nome: "Prison Break",           horario: "23h",     sinopse: "Um homem cria um plano para tirar o irmão sentenciado à morte por um suposto assassinato do vice-presidente dos EUA"},
    { nome: "Black Mirror",           horario: "23h",     sinopse: "Contos de ficção científica que refletem o lado negro da tecnologia, mostrando que nem toda novidade traz só benefícios." },
    { nome: "Pessoa de interesse",   horario: "20h",     sinopse: "Um ex-agente da CIA, dado como morto pelo governo dos EUA, é recrutado por um milionário, para um projeto ultrassecreto."}
];

//check do dia ->
let DataAtual = new Date();
let dia_semana = DataAtual.getDay();
let serie_dia = programacao_series[dia_semana];

//Configurando as variáveis dos objetos ->
let Nome = serie_dia.nome;
let horario = serie_dia.horario;
let sinopse = serie_dia.sinopse;

//imprimindo <-!!->
console.log("\nHoje é dia de "+Nome+" às "+horario+"\n");
console.log("A seguir uma visão geral da série: "+sinopse+"\n");