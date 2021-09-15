// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  // escreva seu código aqui
  const alturaDoRetangulo = Number(prompt('Digite a altura do retangulo:'))
  const larguraDoRetangulo = Number(prompt('Digite a lagura do retangulo:'))
  console.log(alturaDoRetangulo * larguraDoRetangulo)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Digite o ano atual em que você esta:'))
  const anoDeNacimento = Number(prompt('Digite o seu ano de nacumento:'))

  console.log(anoAtual - anoDeNacimento)
}

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  let pesoDoUsuario = Number(prompt('Digite seu peso:'))
  let alturaDoUsuario = Number(prompt('Digite sua altura:'))


  const imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario)
  console.log(imcDoUsuario)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nomeUsuario = prompt('Digite seu nome:')
  const idadeUsuario = prompt('Digite sua idade:')
  const emailUsuario = prompt('Digite seu email:')

  console.log('Meu nome é ' + nomeUsuario + ', tenho ' + idadeUsuario + ' anos, e o meu email é ' + emailUsuario + '.')
}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const corA = prompt('Digite sua primeira cor favorita:')
  const corB = prompt('Digite sua segunda cor favorita:')
  const corC = prompt('Digite sua terceira cor favorita:')

  const frasecompleta = [corA, corB, corC]
  console.log(frasecompleta)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const stringUsuario = prompt('Digite qualquer coisa:')

  console.log(stringUsuario.toUpperCase())
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custoEspetaculo = Number(prompt('Digite o custor do espetáculo de teatro:'))
  const valorDoIngresso = Number(prompt('Digite o valor do ingresso do espetáculo:'))

  console.log(custoEspetaculo / valorDoIngresso)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const fraseUseA = prompt('Digite uma frase:')
  const fraseUseB = prompt('Digite outra frase:')

  const tamanhoA = fraseUseA.length
  const tamanhoB = fraseUseB.length

  console.log(tamanhoA === tamanhoB)
}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const primeiraUse = prompt('Digite uma frase:')
  const segundaUse = prompt('Digite outra frase:')

  console.log(primeiraUse.toLowerCase() === segundaUse.toLowerCase())
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const ano1 = Number(prompt('Qual ano atual:'))
  const anoNacimento = Number(prompt('Em que ano você nasceu?'))
  const anoEmissao = Number(prompt('Qual ano em que sua carteira de identidade foi emitida?'))

  const idadeDoUse = ano1 - anoNacimento
  const emissao = ano1 - anoEmissao

  const menor20 = idadeDoUse <= 20 && emissao >= 5
  const menor50 = idadeDoUse > 20 && idadeDoUse <= 50 && emissao >= 10
  const maior50 = idadeDoUse > 50 && emissao >= 15

  console.log(menor20 || menor50 || maior50)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const anoDoUse = Number(prompt('Digite o ano atual:'))

  const divisao4 = anoDoUse % 4
  const divisao100 = anoDoUse % 100
  const divisao400 = anoDoUse % 400

  const condisaoA = divisao4 === 0 && divisao100 !==0
  const condisaoB = divisao400 === 0

  console.log(condisaoA || condisaoB)
}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const pergunta1 = prompt('Você tem mais de 18 anos?')
  const pergunta2 = prompt('Você possui ensino médio completo?')
  const pergunta3 = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')

  const respostaS = 'sim'
  const respostaA = pergunta1.toLowerCase() === respostaS
  const respostaB = pergunta2.toLowerCase() === respostaS
  const respostaC = pergunta3.toLowerCase() === respostaS

  console.log(respostaA && respostaB && respostaC)
}