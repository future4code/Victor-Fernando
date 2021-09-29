// _________ Exercícios de interpretação de código

// 1. Enqunato i for menor do que 5 ele vai fazer a somar entre os numero 
//    e armazenar na variavel valor. E sera impresso no console o numero 10.

// 2. 
// a. 19
//    21
//    23
//    25
//    27
//    30

// b. Sim.

// 3. *
//    **
//    ***
//    ****

// ________ Exercícios de escrita de código

// 1. 

let quantidadePets = Number(prompt("Quantos bichinhos de estimação voçê tem?"))

let listaDePets = []

if(quantidadePets === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for(let nome = 1; nome <= quantidadePets; nome++){
    let listaDeNomes = prompt(`Digite o nome do seu ${nome}º pet:`)
    listaDePets.push(listaDeNomes)
}}
console.log(listaDePets)

// 2.
let arrayOriginal = [80, 30, 130, 40, 60, 21, 70,]

// a.
for(let array of arrayOriginal){
    console.log(array)
}

// b. 
for(let dividi of arrayOriginal){
    console.log(dividi / 10)
}

// c.
let numerosPares = []
for(let par of arrayOriginal){
    if(par % 2 === 0){
        numerosPares.push(par)
    }
}
console.log(numerosPares)

// d.
let arrayDeString = []
for(let index of arrayOriginal){
    let string = `O elemento do índex ${arrayOriginal.indexOf(index)} é ${index}`
    arrayDeString.push(string)
}
console.log(arrayDeString)

// e.
let valorMaximo = arrayOriginal[0]
let valorMinimo = arrayOriginal[0]
for(let maiorMenor of arrayOriginal){
    if(maiorMenor > valorMaximo){
        valorMaximo =  maiorMenor
    } else if(maiorMenor < valorMinimo){
        valorMinimo =  maiorMenor
    }
}
console.log(`O maior número é ${valorMaximo} e o menor é ${valorMinimo}`)

//_____ Desafio

// 1. 
