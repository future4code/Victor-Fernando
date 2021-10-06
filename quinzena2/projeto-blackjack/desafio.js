/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
projeto-blackjack
// if(confirm("Quer iniciar uma nova rodada?")){
// let carta1User = comprarCarta()
// let carta2User = comprarCarta()
// let resultadoUser = carta1User.valor + carta2User.valor
// let cartasUser = `${carta1User.texto} ${carta2User.texto} `

// let carta1Comp = comprarCarta()
// let carta2Comp = comprarCarta()
// let resultadoComp = carta1Comp.valor + carta2Comp.valor
// let cartasComp = `${carta1Comp.texto} ${carta2Comp.texto} `

// while(carta1User.texto[0] === "A" && carta2User.texto[0] === "A"){
//    carta1User = comprarCarta()
//    carta2User = comprarCarta()
//    }
// while(carta1Comp.texto[0] === "A" && carta2Comp.texto[0] === "A"){
//       carta1Comp = comprarCarta()
//       carta2Comp = comprarCarta()
//    }

// let val = resultadoUser <= 21
// while(val &&
//    confirm(`Suas cartas são ${cartasUser}. A carta revelada do computador é ${carta1Comp.texto}.` +
// "\n"+
// "Deseja comprar mais uma carta?"))
//   {
//       let carta3User = comprarCarta()
//       resultadoUser += carta3User.valor
//       cartasUser += `${carta3User.texto} `

     
//      if(resultadoUser > 21){
//          alert(`Suas cartas são ${cartasUser}. Sua pontuação é ${resultadoUser}.` + "\n" +
//          `As cartas do computador ${cartasComp}. A pontuação do computador é ${resultadoComp}.` + "\n" +
//          "O computador ganhou!")
//          val = false
//       }
   
// }
// while(resultadoComp < resultadoUser && resultadoUser < 21){

//    let carta3Comp = comprarCarta()
//    resultadoComp += carta3Comp.valor
//    cartasComp += `${carta3Comp.texto} `
// }
// if(resultadoComp > 21 || resultadoComp < resultadoUser && resultadoUser <= 21){
//    alert(`Suas cartas são ${cartasUser}. Sua pontuação é ${resultadoUser}.` + "\n" +
//    `As cartas do computador ${cartasComp}. A pontuação do computador é ${resultadoComp}.` + "\n" +
//    "O usuário ganhou!")
// } else if(resultadoComp > resultadoUser && resultadoComp <= 21){
//    alert(`Suas cartas são ${cartasUser}. Sua pontuação é ${resultadoUser}.` + "\n" +
//    `As cartas do computador ${cartasComp}. A pontuação do computador é ${resultadoComp}.` + "\n" +
//    "O computador ganhou!")
// } else{
//    if(resultadoComp === resultadoUser){
//       alert(`Suas cartas são ${cartasUser}. Sua pontuação é ${resultadoUser}.` + "\n" +
//       `As cartas do computador ${cartasComp}. A pontuação do computador é ${resultadoComp}.` + "\n" + 
//       "O terminou em empate!")
//    }
// }

   
// } else{
//    alert("O jogo acabou.")
// }