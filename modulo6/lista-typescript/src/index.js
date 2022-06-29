"use strict";

// 1
// function exercicio1(nome:string, data:string) {
//     const separa = data.split("/")
//     console.log(`Olá me chamo ${nome}, nasci no dia ${separa[0]} do mês de ${separa[1]} do ano de ${separa[2]}`)
// }
// exercicio1("Victor", "30/03/1996")
// 2
// type tipo = string | Number | boolean
// function identificador (index: tipo){
//     return typeof index
// }
// const text1: Number = 2
// const text2: string = "Ola"
// const text3: boolean = false
// console.log(identificador(text1))
// console.log(identificador(text2))
// console.log(identificador(text1))
// 3
// enum GENERO {
// 	ACAO= "ação",
// 	DRAMA= "drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }
// type Pontuacao = {
//     pontuacao: Number
// }
// type Info1 = {
//     nome: string, 
//     anoLancamento: Number, 
//     genero: string,
// }
// type Info2 = Pontuacao & Info1
// function infoFilmes(nome: string, anoLancamento: Number, genero: string, pontuacao?: Number):void {
//     if(pontuacao){
//         const filme1: Info2 = {
//             nome: nome, 
//             anoLancamento: anoLancamento, 
//             genero: genero, 
//             pontuacao:pontuacao
//         }
//         console.log(filme1)
//     } else {
//         const filme2: Info1 = {
//             nome: nome, 
//             anoLancamento: anoLancamento, 
//             genero: genero,
//         }
//         console.log(filme2)
//     }
// }
// infoFilmes("Duna", 2021, GENERO.ACAO)
// 4
// enum SETOR {
//     MARKETING=  "marketing",
//     VENDAS= "vendas",
//     FINANCEIRO= "financeiro"
// }
// const funcionarios = [
// 	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKETING, presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANCEIRO, presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: SETOR.MARKETING, presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANCEIRO, presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKETING, presencial: true }
// ]
// const listaFiltrada = funcionarios.filter((dado)=>{
//     return dado.setor === "marketing" && dado.presencial
// })
// console.log(listaFiltrada)
// 5
var usuarios = [
    { name: "Rogério", email: "roger@email.com", role: "user" },
    { name: "Ademir", email: "ademir@email.com", role: "admin" },
    { name: "Aline", email: "aline@email.com", role: "user" },
    { name: "Jéssica", email: "jessica@email.com", role: "user" },
    { name: "Adilson", email: "adilson@email.com", role: "user" },
    { name: "Carina", email: "carina@email.com", role: "admin" }
];
var filtraUsuario = usuarios.filter(function (index) {
    return index.role === "admin";
});
var filtraEmail = filtraUsuario.map(function (index) {
    return index.email;
});
console.log(filtraEmail);
