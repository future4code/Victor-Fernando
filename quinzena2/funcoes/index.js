// _____________________________ Exercícios de interpretação de código ________________________________________

// Respostas

// 1. 
// a) 10 
//    50

// b) Os parametro passria pela função, mas não os valora da saida não serião impressos no console.


// 2.
// a) Essa função deixa todo o testo que o usuaro digito em minuscula, e verifica se nesse testo tem a palavra cenoura.


// b)  i. true
//     ii. true
//     iii. true


// ____________________________ Exercícios de escrita de código ____________________________

// 1.
// a) 
    const string = "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

    function trocaPalavra(troca) {
         let mudanca =  troca.replaceAll("Caio", "Victor").replaceAll("23", "25").replaceAll("São Paulo", "Blumenau")
         return mudanca
    }

    console.log(trocaPalavra(string))

// b) 
    function novoTexto(nome, idade, cidade, profissao) {
        console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
    }

    novoTexto("Victor", 25, "Blumenal", "operador")

// 2.
// a)  

    function somaDosnumeros(numero1, numero2) {
        let soma = numero1 + numero2
        return soma
    }

    console.log(somaDosnumeros(10, 3))

// b) 
    function maiorOuMenor(comparacao1, comparacao2) {
        let comparar = comparacao1 >= comparacao2
        return comparar
    }
    console.log(maiorOuMenor(6, 2))

// c) 
    function numeroParOu(numPar) {
        const par = numPar % 2 === 0
        return par
    }
    console.log("O numero é par?", numeroParOu(20))

// d) 
    const frazeOriginal = "Fui no mercado hoje."

    function letrasMaiusculas(novaFrazeA) {
        const maiusculas = novaFrazeA.toUpperCase()
        
        console.log(maiusculas, maiusculas.length)
    }
    letrasMaiusculas(frazeOriginal)


// 3.

    const valorUse1 = Number(prompt("Digite um número:"))
    const valorUse2 = Number(prompt("Digite outro número:"))

    function operacoesBasicas(primeiroValor, segundoValor) {
        const soma = primeiroValor + segundoValor
        const subitracao = primeiroValor - segundoValor
        const multiplicacao = primeiroValor * segundoValor
        const divisao = primeiroValor / segundoValor

        console.log("Soma: " + soma)
        console.log("Subitação: " + subitracao)
        console.log("Multiplicação: " + multiplicacao)
        console.log("Divisão: " + divisao)
    }
    operacoesBasicas(valorUse1, valorUse2)


// _________________________________ Desafios ___________________________________

// 1.
// a) 
    const desafio1 = (imprimirNaTela) => {
        console.log(imprimirNaTela)
    }


    const desafio2 = (valorADesafio, valorBDesafio) => {
        const desafiosoma = valorADesafio + valorBDesafio
        desafio1(desafiosoma)
    }
    desafio2(4, 2)


// 2.
    function teoremaPitagoras(catetoA, catetoB) {
        const resultHip = (catetoA ** 2) + (catetoB ** 2)
        const hip = Math.sqrt(resultHip)
        return hip
    }
    console.log(teoremaPitagoras(4, 3))