// 1

// a

// const minhaString: string = 1

// Gera um erro que o tipo 'number' não pode ser atribuído ao tipo 'string'.

// b

// let meuNumero: Number | string = 2

// Podemo usar o chamado union type para adicionar dois tipos a uma variaveu.


// c

// type User = {
//     nome: string,

//     idade: Number,

//     corFavorita: string
// }

// const user1: User = {
//     nome: "Phelipe",
//     idade: 20,
//     corFavorita: "Amarelo"
// }

// const user2: User = {
//     nome: "Camila",
//     idade: 22,
//     corFavorita: "Azul"
// }

// const user3: User = {
//     nome: "Rosa",
//     idade: 18,
//     corFavorita: "Verde"
// }

// d 

// type User = {
//     nome: string,

//     idade: Number,

//     corFavorita: string
// }

// enum CorFavorita {
//     VERMELHO = "vermelha", 
//     LARANJA = "laranja", 
//     AMARELO = "amarela", 
//     VERDE = "verde", 
//     AZUL = "azul", 
//     AZULESCURO= "azul-escuro",
//     VIOLETA = "violeta"
// }

// const user1: User = {
//     nome: "Phelipe",
//     idade: 20,
//     corFavorita: CorFavorita.AMARELO
// }

// const user2: User = {
//     nome: "Camila",
//     idade: 22,
//     corFavorita: CorFavorita.AZUL
// }

// const user3: User = {
//     nome: "Rosa",
//     idade: 18,
//     corFavorita: CorFavorita.VERDE
// }

// 2

// function obterEstatisticas(numeros:Number[]):{} {

//     const numerosOrdenados = numeros.sort(
//         (a, b) => Number(a) - Number(b)
//     )

//     let soma = 0

//     for (let num of numeros) {
//         soma = soma + Number(num)
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([5, 2, 8, 9]))

// a

// A entrada é um array de numeros e a saida é o maior, menor e a media desse array.

// b

// c 

// type AmostraDeIdades = {

//     numeros: [21, 18, 65, 44, 15, 18],

//     obterEstatisticas: (numeros:Number[] )=> {

//         const numerosOrdenados = numeros.sort(
//             (a, b) => Number(a) - Number(b)
//         )
    
//         let soma = 0
    
//         for (let num of numeros) {
//             soma = soma + Number(num)
//         }
    
//         const estatisticas = {
//             maior: numerosOrdenados[numeros.length - 1],
//             menor: numerosOrdenados[0],
//             media: soma / numeros.length
//         }
    
//         return estatisticas
//     }
// }


// 3

// a 

type Post =  {
    autor: string,
    texto: string
}

const alvo: Post = {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
}
const severo: Post = {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
}
const hermione: Post = {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
}
const dobby: Post ={
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
}
const lord: Post = {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
}

