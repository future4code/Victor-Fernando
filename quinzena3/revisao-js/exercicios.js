// EXERCÍCIO 01
function inverteArray(array) {
  let arrayInverso = []
  for(let i = array.length - 1; i >= 0; i--){
    arrayInverso.push(array[i])
  }

  return arrayInverso
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let elevadoA2 = []
  for(let i of array){
    if(i % 2 === 0){
      elevadoA2.push(i ** 2)
    }
  }
  return elevadoA2
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let arrayDeNumerosPar = []
  for(let index of array){
    if(index % 2 === 0){
      arrayDeNumerosPar.push(index)
    }
  }
  return arrayDeNumerosPar
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = array[0]
  for(let index of array){
    if(index > maiorNumero){
      maiorNumero = index
    }
  }
  return maiorNumero
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  let quantidadeDeElementos = 0
  for(let index = 0; index < array.length; index++){
    let elemento = array[index]
    if(elemento = 1){
      quantidadeDeElementos += elemento
    }
  }
  return quantidadeDeElementos
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const resposta =[false, false, true, true, true]
  return resposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = []
  let valor = n * 2
  for(let tamanho = 0; tamanho < valor; tamanho++){ 
    if(tamanho % 2 === 0){
    numerosPares.push(tamanho)
    }
  }
  return numerosPares
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
  let triangulo
  if(a === b && a === c && b === c){
    triangulo = 'Equilátero'
  } else if(a !== b && a !== c && b !== c){
    triangulo = 'Escaleno'
  } else{
    triangulo = 'Isósceles'
  }
  return triangulo
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  let numerosArray = []
  // let comparador = 
  if(num1 > num2){
    numerosArray.push(num1, num2)
  } else{
    numerosArray.push(num2, num1)
  }
  saida = {
    maiorNumero: numerosArray[0],
    maiorDivisivelPorMenor: numerosArray[0] % numerosArray[1] === 0,
    diferenca: numerosArray[0] - numerosArray[1]
  }
  return saida
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let parametroA = array[0]
  let parametroB = array[0]
  let segundoMaiorMenor = []

  if(array.length > 2){
    const maiorMenor = array.map((item) => {
    if(item > parametroA){
      parametroA = item
    }
    if(item < parametroB){
      parametroB = item
    }
  })

  const separador = array.filter((item) => {
    return item < parametroA && item > parametroB
  })

  let segundoMaior = 0
  let segundoMenor = Math.max(... separador)

  const segundo = separador.map((item) => {
    
    if(item > segundoMaior){
      segundoMaior = item
    }
    if(item < segundoMenor){
      segundoMenor = item
    }
  })
  segundoMaiorMenor.push(segundoMaior, segundoMenor)
}else{
  segundoMaiorMenor = array
}
  return segundoMaiorMenor
}

// EXERCÍCIO 11
function ordenaArray(array) {
  let arrayMenorQ10 = []
  let arrayMaiorQ10 = []
  const separador = array.map((item) => {
    if(item < 10){
      arrayMenorQ10.push(item)
    }
    if(item >= 10){
      arrayMaiorQ10.push(item)
    }
  })
  arrayMenorQ10.sort()
  arrayMaiorQ10.sort()
  const sequencia = arrayMaiorQ10.map((item) => {
    arrayMenorQ10.push(item)
  })
  return arrayMenorQ10
}

// EXERCÍCIO 12
function filmeFavorito() {
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  const filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"]
  }
  let listaDeAtores = ""
  for (let i = 0; i < filme.atores.length; i++) {
    if (i === filme.atores.length - 1) {
      listaDeAtores += filme.atores[i]
    } else {
      listaDeAtores += filme.atores[i] + ", "
    }
  }
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${listaDeAtores}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
