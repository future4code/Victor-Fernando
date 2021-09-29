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
if(confirm("Quer iniciar uma nova rodada?")){
let carta1User = comprarCarta()
let carta2User = comprarCarta()
let novaCartaUser1 = []
let novaCartaUser2 = []

let carta1Comp = comprarCarta()
let carta2Comp = comprarCarta()

// Esta funcionando
while(carta1User.texto[0] === "A" && carta2User.texto[0] === "A"){
   carta1User = comprarCarta()
   carta2User = comprarCarta()
   }
while(carta1Comp.texto[0] === "A" && carta2Comp.texto[0] === "A"){
      carta1Comp = comprarCarta()
      carta2Comp = comprarCarta()
   }
   
}