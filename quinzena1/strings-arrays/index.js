//________________________ Exercícios de interpretação de código ________________________________________
// Respostas

// 1. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
//  a.  undefined
//  b.  null
//  c.  11
//  d.  3
//  e.  [ 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13 ]
//  f.  9

// 2. Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
// Será impresso -
//  SUBI NUM ÔNIBUS EM MIRROCOS 27

//______________________________ Exercícios de escrita de código ____________________________________________

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.
    
    const emailUsuario = prompt("Digite seu email:")
    const nomeUsuario = prompt("Digite seu nome:")

    console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}!`)


// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas,
//    armazenado em uma variável. Em seguida, siga os passos:

    const minhaLista = ["Cochinha", "Pizza", "Mingal", "Bolo", "Chocolate"]

// a) Imprima na tela o array completo.

    console.log(minhaLista)

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ",
//    seguida por cada uma das comidas, **uma embaixo da outra**.

    console.log("Essas são as minhas comidas preferidas:")
    console.log(minhaLista[0])
    console.log(minhaLista[1])
    console.log(minhaLista[2])
    console.log(minhaLista[3])
    console.log(minhaLista[4])

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida.
//    Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista.

    const comidaDoUsuario = prompt("Qual sua comida preferida?")
    minhaLista[1] = comidaDoUsuario

    console.log(minhaLista)


// 3. 

    const listaDeTarefas = []
    const tarefaUser1 = prompt("Digite uma tarefa que você precise realizar durante dia:")
    const tarefaUser2 = prompt("Digite outra tarefa que você precise realizar durante dia:")
    const tarefaUser3 = prompt("Digite outra tarefa que você precise realizar durante dia:")

    listaDeTarefas.push(tarefaUser1, tarefaUser2, tarefaUser3)
    console.log(listaDeTarefas)

    const tarefaFeita= prompt("Digite o numero de qual tarefa que já realizou:")

    listaDeTarefas.splice(tarefaFeita - 1, 1)

    console.log(listaDeTarefas)


//__________________________________________  Desafioa  ___________________________________________________

// 1. 
    // const frazeUser = prompt("Digite uma frase:")
    // const arrayUser = [frazeUser.split(" ")]
    // console.log(arrayUser)

// 2.
    // const listaDeFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
    // const indice = listaDeFrutas.indexOf("Abacaxi")
    // console.log("O indice de Abacaxi é " + indice)
    // console.log(`O tamanho da palavra ${listaDeFrutas[indice]} é ` + listaDeFrutas[indice].length)