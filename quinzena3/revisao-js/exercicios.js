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

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
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
