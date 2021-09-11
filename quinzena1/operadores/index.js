// ------------- Respostas dos exercícios de interpretação de código -------------------

// 1. a. false
//    b. false 
//    c. true
//    d. boolean


// 2. Tudo que vem de um prompt é uma string, então tem que converte para numeros para consegui fazer qualquer operação matematica.
// Da forma que o código esta sera impresso no console os dois valores que o usuario digitou e não a soma entre eles.


// 3. let primeiroNumero = Number(prompt("Digite um numero!"))
//    let segundoNumero = Number(prompt("Digite outro numero!"))
//    const soma = primeiroNumero + segundoNumero
//    console.log(soma)


// ------------- Respostas dos exercícios de escrita de código ----------------------

// 1.

let idadeDoUsuario = Number(prompt("Qual sua idade?"))
let idadeDoAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

const idadeMaior = idadeDoUsuario > idadeDoAmigo
const diferencaDeIdade = idadeDoUsuario - idadeDoAmigo

console.log("Sua idade é maior do que a do seu melhor amigo(a)?", idadeMaior)
console.log("A diferença da entre a sua idade e a do seu melhor amigo(a) é", diferencaDeIdade)

// 2. 

let numeroDoUsuario = Number(prompt("Digite um numero par:"))

const restoDaDivisao = numeroDoUsuario % 2

console.log(restoDaDivisao)

// Se o usuario digitar um numero par sempre vai dar 0, não importa o valor que ele escolher.
//se o usuario digiar um numero impar sempre vai dar 1, não importa o valor que ele escolher.

// 3.

let idade = Number(prompt("Quantos anos você tem?"))

const idadeEmMeses = idade * 12
const idadeEmDias = idade * 365
const idadeEmHoras = idade * 8760

console.log("Você tem", idadeEmMeses, "meses de vida.")
console.log("Você tem", idadeEmDias, "dias de vida.")
console.log("Você tem", idadeEmHoras, "horas de vida.")


// 4. 

let numero1 = Number(prompt("Digite um numero!"))
let numero2 = Number(prompt("Digite um numero!"))

let restoDoNumero1 = numero1 % numero2
let restoDoNumero2 = numero2 % numero1

console.log("O primeiro numero é maior que segundo?", numero1 > numero2)
console.log("O primeiro numero é igual ao segundo?", numero1 === numero2)
console.log("O primeiro numero é divisível pelo segundo?", restoDoNumero1 === 0)
console.log("O segundo numero é divisível pelo primeiro?", restoDoNumero2 === 0)


// ---------------------------- Desafios -------------------------------

// 1.

// a. Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

// const conversaoA = (77 - 32)*(5/9) + 273.15
// console.log("77°F equuivale a", conversaoA,"K.")

// b. Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também.

// const conversaoB = (80)*(9/5) + 32
// console.log("80°C equuivale a", conversaoB,"°F.")

// c. Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também.

// const conversaoC = (30)*(9/5) + 32
// const conversaoD = (conversaoC - 32)*(5/9) + 273.15

// console.log("30°C equuivale a", conversaoC,"°F e a", conversaoD,"K.")

// d. Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter.

// let gCelsius = prompt("Digite o valor de graus celcius que deseja converter:")

// const valorA = (gCelsius)*(9/5) + 32
// const valorB = (valorA - 32)*(5/9) + 273.15

// console.log(gCelsius, "°C equuivale a", valorA,"°F e a", valorB,"K.")

// 2. 
//a. Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora

// let valorAPagar = 0.05 * 280
// console.log("O valor a ser pago é", valorAPagar)

// b. Altere o programa para receber mais um valor: a porcentagem de desconto.
//    Calcule e mostre o valor a ser pago pela mesma residência acima considerando 15% de desconto.

// let desconto = (valorAPagar * 15) / 100
// const valorComDesconto = valorAPagar - desconto
// console.log("O valor a ser pago com desconto é", valorComDesconto)

// 3.
// a. Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg.
// Imprima  a resposta no console da seguinte forma:

// const converteLibra = 20 * 0.454
// console.log("20lb equivalem a", converteLibra ,"kg")

// b. Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg.
//    Imprima  a resposta no console da seguinte forma: 

// const converteOnca = 10.5 * 0.02834
// console.log("10.5oz equivalem a", converteOnca ,"kg")

// c. Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m.
//    Imprima  a resposta no console da seguinte forma:

// const converteMilha = 100 * 0.000621371
// console.log("100mi equivalem a", converteMilha ,"m")

// d. Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m.
//    Imprima  a resposta no console da seguinte forma: 

// const convertePes = 50 * 3.28084
// console.log("50ft equivalem a", convertePes ,"m")

// e. Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro.
//    Imprima  a resposta no console da seguinte forma.

// const converteGalao = 103.56 / 0.26417
// console.log("103.56gal equivalem a", converteGalao ,"l")

// f. Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro.
//    Imprima  a resposta no console da seguinte forma: 

// const converteXicara = 450 * (6 / 25)
// console.log("450xic equivalem a", converteXicara ,"l")

// g. Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter.

// let quatidadeDeXicaras = prompt ("Imfome o valor em xícaras que deseja converter para litro:")
// const unidadeconvertida = quatidadeDeXicaras * (6 / 25)
// console.log(quatidadeDeXicaras, "xic equivalem a", unidadeconvertida ,"l")