// ______ Exercícios de interpretação de código

// 1. 
// { nome: 'Amanda Rangel', apelido: 'Mandi' } 0 [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' }, { nome: 'Letícia Chijo', apelido: 'Chijo' } ]

// { nome: 'Laís Petra', apelido: 'Laura' } 1 [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' }, { nome: 'Letícia Chijo', apelido: 'Chijo' } ]

// { nome: 'Letícia Chijo', apelido: 'Chijo' } 2 [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' }, { nome: 'Letícia Chijo', apelido: 'Chijo' } ]

// 2. 
// [ 'Amanda Rangel', 'Laís Petra', 'Letícia Chijo' ]

// 3. 
// [ { nome: 'Amanda Rangel', apelido: 'Mandi' },
//   { nome: 'Laís Petra', apelido: 'Laura' } ]


// _____ Exercícios de escrita de código

// 1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a. 
const nomesPets = pets.map((item) => {
    return item.nome
})
console.log(nomesPets)

// b.
const petsSalsicha = pets.filter((item) => {
    return item.raca === "Salsicha"
})
console.log(petsSalsicha)

// c.
const petsPoodle = pets.filter((item) => {
    return item.raca === "Poodle"
})
const nomesPoodle = petsPoodle.map((item) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`
})
console.log(nomesPoodle)

// 2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a. 
 const nomesItem = produtos.map((item)=>{
    return item.nome
 })
 console.log(nomesItem)

 // b. 
const nomePreco = produtos.map((item) => {
    const desconto = item.preco * 0.95
    const novoArray = {
        nome: item.nome,
        preco: desconto
    }
    return novoArray
})
console.log(nomePreco)

// c.
const bebidas = produtos.filter((item)=> {
    return item.categoria === "Bebidas"
})
console.log(bebidas)

// d. 
const contemYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
console.log(contemYpe)

// e. 
const palavraYpe = produtos.filter((item) => {
    return item.nome.includes("Ypê")
})
const fraseYep = palavraYpe.map((item)=>{
    return `Compre ${item.nome} por ${item.preco}`
})
console.log(fraseYep)