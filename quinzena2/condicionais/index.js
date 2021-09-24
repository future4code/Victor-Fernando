// ______________________________ Exercícios de interpretação de código ______________________________

// 1.
    // a. Esse programa pergunta um número ao usuario e faz o teste para verificar se ele é par.

    // b. Ira se impresso no console "Passou no teste" caso o número escolhido pelo usuario seja par.

    // c. Ira se impresso no console "Não passou no teste" caso o número escolhido pelo usuario não seja par.

// 2. 
    // a. Código acima mostra ao usuário o preço da frutra que ele esvolheu.

    // b. O preço da fruta  Maçã  é  R$  2.25

    // c. A mensagem impressa seria: O preço da fruta  Pêra  é  R$  5
    //    Se tirar o break o código vai roda a instrução do próximo case também, caso tenha o break nesse case ele vai executar as instruções 
    //    desse case.

// 3.
    // a. A primeira linha pegunta para o usuario qual o primeiro número.

    // b. Se o usuário digitar 10 sera impresso:
    //     Esse número passou no teste
    //     Mensagem de erro
    //    E se o usuário digita -10 so vai aparece uma mendagem de erro.

    // c. Sim, a variavel que o console.log esta chamando para ser impressa no console esta dentro do escopo da condição,
    //    então ao tentar imprimila de fora da condição não ira encontrar a variavel gerando um erro.


// ____________________________ Exercícios de escrita de código ____________________________

// 1.
    // const idadeParaDirigir = Number(prompt("Qual sua idade?"))

    // if (idadeParaDirigir >= 18) {
    //     console.log("Você pode dirigir.")
    // } else{
    //     console.log("Você não pede dirigir.")
    // }

// 2. 
    // const turnoDoAluno1 = prompt("Em qual turno você esta, digite M (matutino) ou V (Vespertino) ou N (Noturno).")

    // if(turnoDoAluno1 === "M") {
    //     console.log("Bom Dia!")
    // } else if(turnoDoAluno1 === "V") {
    //     console.log("Boa Tarde!")
    // } else{
    //     console.log("Boa Noite!")
    // }

// 3.
    // const turnoDoAluno2 = prompt("Em qual turno você esta, digite M (matutino) ou V (Vespertino) ou N (Noturno).")
    // switch(turnoDoAluno2){
    //     case "M":
    //         console.log("Bom Dia!")
    //         break
    //     case "V":
    //         console.log("Boa Tarde!")
    //         break
    //     case "N":
    //         console.log("Boa Noite!")
    //         break
    //     default: console.log("Por favor digite M, V ou N.")
    //     break
    // }

// 4.
    // const generoDoFilme1 = prompt("Qual o genero do filme que vão assistir?")
    // const precoDoIngresso1 = Number(prompt("Qual o preço do ingresso desse filme?"))

    // if(generoDoFilme1 === "fantasia" && precoDoIngresso1 < 15) {
    //     console.log("Bom filme!")
    // } else{
    //     console.log("Escolha outro filme :(")
    // }

// ____________________________ Desafio ______________________________

// 1.
    // const generoDoFilme2 = prompt("Qual o genero do filme que vão assistir?")
    // const precoDoIngresso2 = Number(prompt("Qual o preço do ingresso desse filme?"))
    // const lanchinho = prompt("Qual lanche você vai comprar pipoca, chocolate ou doces.")

    // if(generoDoFilme2 === "fantasia" && precoDoIngresso2 < 15) {
    //     console.log("Bom filme!")
    //     console.log("Aproveite o seu", lanchinho)
    // } else{
    //     console.log("Escolha outro filme :(")
    // }

// 2. 
    const nomeDoComprador = prompt("Digite seu nome completo:")
    const tipoDeJogo = prompt("Qual o tipo do jogo? IN indica internacional e DO indica doméstico.")
    const etapaDoJogo = prompt("Qual a etapa do jogo? SF indica semi-final, DT indica decisão de terceiro lugar e FI indica final.")
    const categoria = Number(prompt("Digite a categoria: 1, 2, 3 ou 4."))
    const quantidade = Number(prompt("Digite aquantidade de ingresso que deseja comprar:"))

    let valorFinal = []

    console.log("---Dados da compra---")
    console.log("Nome do cliente:", nomeDoComprador)
    
    if(tipoDeJogo === "DO") { 
        console.log("Tipo de jogo: Doméstico") 
        if(categoria === 1){
            if (etapaDoJogo === "SF") {
            console.log("Etapa do jogo: Semifinais")
            console.log("Categoria:", categoria)
            valorFinal.push("R$ " + 1320)
            } else if(etapaDoJogo === "DT") {
                console.log("Etapa do jogo: Decisão do 3º lugar")
                console.log("Categoria:", categoria)
                valorFinal.push("R$ " + 660)
            } else if(etapaDoJogo === "FI"){
                console.log("Etapa do jogo: Final")
                console.log("Categoria:", categoria)
                valorFinal.push("R$ " + 1980)
            }
        } else if(categoria === 2){
            if (etapaDoJogo === "SF") {
                console.log("Etapa do jogo: Semifinais")
                console.log("Categoria:", categoria)
                valorFinal.push("R$ " + 880)
                } else if(etapaDoJogo === "DT") {
                    console.log("Etapa do jogo: Decisão do 3º lugar")
                    console.log("Categoria:", categoria)
                    valorFinal.push("R$ " + 440)
                } else if(etapaDoJogo === "FI"){
                    console.log("Etapa do jogo: Final")
                    console.log("Categoria:", categoria)
                    valorFinal.push("R$ " + 1320)
                }
        } else if(categoria === 3){
            if (etapaDoJogo === "SF") {
                console.log("Etapa do jogo: Semifinais")
                console.log("Categoria:", categoria)
                valorFinal.push("R$ " + 540)
                } else if(etapaDoJogo === "DT") {
                    console.log("Etapa do jogo: Decisão do 3º lugar")
                    console.log("Categoria:", categoria)
                    valorFinal.push("R$ " + 330)
                } else if(etapaDoJogo === "FI"){
                    console.log("Etapa do jogo: Final")
                    console.log("Categoria:", categoria)
                    valorFinal.push("R$ " + 880)
                }
        } else if (categoria === 4){
            if (etapaDoJogo === "SF") {
                console.log("Etapa do jogo: Semifinais")
                console.log("Categoria:", categoria)
                valorFinal.push("R$ " + 220)
                } else if(etapaDoJogo === "DT") {
                    console.log("Etapa do jogo: Decisão do 3º lugar")
                    console.log("Categoria:", categoria)
                    valorFinal.push("R$ " + 170)
                } else if(etapaDoJogo === "FI"){
                    console.log("Etapa do jogo: Final")
                    console.log("Categoria:", categoria)
                    valorFinal.push("R$ " + 330)
                }
        } 
    }else if(tipoDeJogo === "IN"){
            jogoTipo = "Tipo de jogo: Internacional"
            if(categoria === 1){
                if (etapaDoJogo === "SF") {
                console.log("Etapa do jogo: Semifinais")
                console.log("Categoria:", categoria)
                valorFinal.push("U$ " + 1320 * 4.10)
                } else if(etapaDoJogo === "DT") {
                    console.log("Etapa do jogo: Decisão do 3º lugar")
                    console.log("Categoria:", categoria)
                    valorFinal.push("U$ " + 660 * 4.10)
                } else if(etapaDoJogo === "FI"){
                    console.log("Etapa do jogo: Final")
                    console.log("Categoria:", categoria)
                    valorFinal.push("U$ " + 1980 * 4.10)
                }
            } else if(categoria === 2){
                if (etapaDoJogo === "SF") {
                    console.log("Etapa do jogo: Semifinais")
                    console.log("Categoria:", categoria)
                    valorFinal.push("U$ " + 880 * 4.10)
                    } else if(etapaDoJogo === "DT") {
                        console.log("Etapa do jogo: Decisão do 3º lugar")
                        console.log("Categoria:", categoria)
                        valorFinal.push("U$ " + 440 * 4.10)
                    } else if(etapaDoJogo === "FI"){
                        console.log("Etapa do jogo: Final")
                        console.log("Categoria:", categoria)
                        valorFinal.push("U$ " + 1320 * 4.10)
                    }
            } else if(categoria === 3){
                if (etapaDoJogo === "SF") {
                    console.log("Etapa do jogo: Semifinais")
                    console.log("Categoria:", categoria)
                    valorFinal.push("U$ " + 540 * 4.10)
                    } else if(etapaDoJogo === "DT") {
                        console.log("Etapa do jogo: Decisão do 3º lugar")
                        console.log("Categoria:", categoria)
                        valorFinal.push("U$ " + 330 * 4.10)
                    } else if(etapaDoJogo === "FI"){
                        console.log("Etapa do jogo: Final")
                        console.log("Categoria:", categoria)
                        valorFinal.push("U$ " + 880 * 4.10)
                    }
            } else if (categoria === 4){
                if (etapaDoJogo === "SF") {
                    console.log("Etapa do jogo: Semifinais")
                    console.log("Categoria:", categoria)
                    valorFinal.push("U$ " + 220 * 4.10)
                    } else if(etapaDoJogo === "DT") {
                        console.log("Etapa do jogo: Decisão do 3º lugar")
                        console.log("Categoria:", categoria)
                        valorFinal.push("U$ " + 170 * 4.10)
                    } else if(etapaDoJogo === "FI"){
                        console.log("Etapa do jogo: Final")
                        console.log("Categoria:", categoria)
                        valorFinal.push("U$ " + 330 * 4.10)
                    }
            }
    }
    if(quantidade > 1){
        console.log(`Quantidade de Ingressos: ${quantidade} ingressos`)     
    } else{
        console.log(`Quantidade de Ingressos: ${quantidade} ingresso`)
    }
    console.log("---Valores---")
    console.log("Valor Do Ingressos: " + valorFinal[0])
    console.log("Valor total: " + valorFinal[0] * quantidade)

