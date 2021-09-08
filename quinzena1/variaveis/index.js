// Exercícios de interpretação de código
//  Respostas

// 1. Será impresso no console.
//  10
//  10 5

// 2. Será impresso no console.
//  10 10 10

// 3. Para a pimeira variavel sugiro let horasPorDia = prompt("Quantas horas você trabalha por dia?")
//  e para a segunda variavel suriro let salrioPorDia = prompt("Quanto você recebe por dia?")
//  alert("Voce recebe ${salrioPorDia/horasPorDia} por hora")


// Exercícios de escrita de código

// Primeiro exercício de escrita de código

 let nome
 let idade
 console.log(typeof nome)
 console.log(typeof idade)
// Me retornou undefined, porque não foi atribuido um valor as variaveis.
 
 let nomeDoUsuario = prompt ("Qual o seu nome?")
 let idadeDoUsuario = prompt("Qual a sua idade?")
 console.log(typeof nomeDoUsuario)
 console.log(typeof idadeDoUsuario)
// As duas variaveis me retornou string, porque tudo que vem de um prompt é uma string.

 console.log("Olá", nomeDoUsuario, ", você tem", idadeDoUsuario, "anos")


// Segundo exercício de escrita de código

 let primeiraPergunta = prompt ("Foi para academia hoje?")
 let segundaPergunta = prompt ("Você foi trabalhar hoje?")
 let terceiraraPergunta = prompt ("Você esta usando tênis?")

 let respostaPrimairaPergunta = primeiraPergunta
 let respostaSegundaPergunta = segundaPergunta
 let respostaTerceiraraPergunta = terceiraraPergunta

 console.log("Foi para academia hoje? -", respostaPrimairaPergunta)
 console.log("Você foi trabalhar hoje? -", respostaSegundaPergunta)
 console.log("Você esta usando tênis? -", respostaTerceiraraPergunta)


// Terceiro exercício de escrita de código 

 let a = 10
 let b = 25
// Aqui faremos uma lógica para trocar os valores
 let valorDeA = a
 a = b
 b = valorDeA
// Depois de trocados, teremos o seguinte resultado:
 console.log("O novo valor de a é", a) // O novo valor de a é 25
 console.log("O novo valor de b é", b) // O novo valor de b é 10


// Desafio

let primeiroNumero = prompt ("Escreva um número:")
let segundoNumero = prompt ("Escreva outro número:")

let primeiroNumeroConvertido = Number (primeiroNumero)
let segundoNumeroConvertido = Number (segundoNumero)

let numerosSomados = primeiroNumeroConvertido + segundoNumeroConvertido
let numerosmultiplicados = primeiroNumeroConvertido * segundoNumeroConvertido

console.log("O primeiro número somado ao segundo número resulta em:", numerosSomados)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", numerosmultiplicados)