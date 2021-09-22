// _____________________ Exercícios de interpretação de código ________________________________________

// 1.
//   Matheus Nachtergaele
//   Virginia Cavendish
//   {canal: 'Globo', horario: '14h'}


// 2.
// a.
//  {nome: 'Juca', idade: 3, raca: 'SRD'}
//  {nome: 'Juba', idade: 3, raca: 'SRD'}
//  {nome: 'Jubo', idade: 3, raca: 'SRD'}

// b. Os três pontos antes do nome de um objeto significa que esta copiando aquele objeto para dentro de outro.

// 3. 
// a.
//  false
//  undefined

// b. A função verifica se exite uma variavel com o nome que foi dado dentro do objeto e retorna o valor 
//    que estar amazenado dentro dele, como no caso de backende que retorna false que era o valor que estava 
//    amazenado na variavel com este nome. Já no caso so de altura retorna undefined porquer não existe nenhuma 
//    variavel com este nome detro do objeto.


// ________________________________________ Exercícios de escrita de código __________________________________________

// 1.
// a.
    const meusDados = {
        nome: "Victor",
        apelidos: ["Vitão", "Vitinho", "Vito"]
    }

    function fraseComDados() {
        console.log(`Eu sou ${meusDados.nome}, mas pode me chamar de: ${meusDados.apelidos[0]}, ${meusDados.apelidos[1]} ou ${meusDados.apelidos[2]}`)
    }
    fraseComDados(meusDados)

// b.
    const dadosAtualizados = {
        ...meusDados,
        apelidos: ["Vic", "Vi", "Vt"]
    }

    function fraseComNovosDados() {
        console.log(`Eu sou ${dadosAtualizados.nome}, mas pode me chamar de: ${dadosAtualizados.apelidos[0]}, ${dadosAtualizados.apelidos[1]} ou ${dadosAtualizados.apelidos[2]}`)
    }
    fraseComNovosDados(dadosAtualizados)

// 2.
    const funcionarioA = {
        nome: "João",
        idade: 20,
        profissao: "Padeiro"
    }
    const funcionarioB = {
        nome: "Lucas",
        idade: 22,
        profissao: "Predeiro"
    }

    function funcionarios(x, y) {
        console.log(`["${funcionarioA.nome}", ${funcionarioA.nome.length}, ${funcionarioA.idade}, "${funcionarioA.profissao}", ${funcionarioA.profissao.length}]`)
        
        console.log(`["${funcionarioB.nome}", ${funcionarioB.nome.length}, ${funcionarioB.idade}, "${funcionarioB.profissao}, ${funcionarioB.profissao.length}]`)
    }
    funcionarios(funcionarioA, funcionarioB)

// 3.
    const carrinho = []
    const fruta1 = {
        nome: "Banana",
        disponibilidade: true
    }
    const fruta2 = {
        nome: "Uva",
        disponibilidade: true
    } 
    const fruta3 = {
        nome: "Pera",
        disponibilidade: true
    }
    function feira(a, b, c) {
         carrinho.push(fruta1, fruta2, fruta3)
         console.log(carrinho)
    }
    feira(fruta1, fruta2, fruta3)


// _______________________ Desafio _____________________________________

// 1.
    // function dadosDoUsuario() {
    //     const nomeUser = prompt("Qual o seu nome?")
    //     const idadeUser = prompt("Qual sua idade?")
    //     const profissaoUser = prompt("Qual a sua profissão?")
    //     const dadosUser = {
    //         nome: nomeUser,
    //         idade: idadeUser,
    //         profissao: profissaoUser,
    //     }
    //     console.log(dadosUser)
    // }
    // dadosDoUsuario()

// 2.
    // function listaDeFilmes(){
    //     const filme1 = {
    //         anoDeLancamento: 2018,
    //         nomeDoFilme: "Venom"
    //     }
    //     const filme2 = {
    //         anoDeLancamento: 2019,
    //         nomeDoFilme: "Homem-Aranha: Longe de Casa"
    //     }
    //     console.log("O primeiro filme foi lançado antes do segundo?", filme1.anoDeLancamento < filme2.anoDeLancamento)
    //     console.log("O primeiro filme foi lançado no mesmo ano do segundo?", filme1.anoDeLancamento === filme2.anoDeLancamento)

    // }
    // listaDeFilmes()

// 3.
    // const carrinho = []
    // const fruta1 = {
    //     nome: "Banana",
    //     disponibilidade: true
    // }
    // const fruta2 = {
    //     nome: "Uva",
    //     disponibilidade: true
    // } 
    // const fruta3 = {
    //     nome: "Pera",
    //     disponibilidade: true
    // }
    // function feira(a, b, c) {
    //     carrinho.push(fruta1, fruta2, fruta3)
    //     console.log(carrinho)
    // }
    // feira(fruta1, fruta2, fruta3)

    // function estoque(disponivel){
    //     disponivel.disponibilidade = false
    //     console.log(disponivel)
    // }
    // estoque(fruta1)