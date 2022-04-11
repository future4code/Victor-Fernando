// 1

// let data = "20/04/2000"
// let nome = "Victor"


// function fun1 (nom:string, data: string) : any {
//     let nova = data.split("/")

//     console.log(`Olá me chamo ${nome}, nasci no dia ${nova[0]} do mês de ${nova[1]} do ano de ${nova[2]}`)
// }

// console.log(fun1(nome, data))

// 2 

// const valor1:Number = 1
// const valor2:string = "1"
// const valor3:boolean = true

// function identificador (index1:any, index2:any, index3:any) :any {
//     console.log(typeof index1)
//     console.log(typeof index2)
//     console.log(typeof index3)
// }

// console.log(identificador(valor1, valor2, valor3))


// 3 

// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }

// const nome = "Vigadores"
// const ano = 2018
// const genero = GENERO.ACAO
// const nota = 80

// function dadosFilme (nome:string, ano: Number, genero:string, nota?:Number) :any{
    
//     if(!nota){
//         const informacoes1 = {
//             nome: nome,
//             ano: ano,
//             genero: genero,
//         }

//         console.log(informacoes1)
//     } else{
//         const informacoes2 = {
//             nome: nome,
//             ano: ano,
//             genero: genero,
//             nota: nota,
//         }
//         console.log(informacoes2)
//     }
// }

// console.log("primeira saida:",dadosFilme(nome, ano, genero, nota))
// console.log("segunda saida:",dadosFilme(nome, ano, genero))

// 4 

// enum SETORES {
//     MARKETING = "marketing",
//     VENDAS = "vendas", 
//     FINANCEIRO = "financeiro"
// }

// const parametro = "marketing"

// const funcionarios = [
// 	{ nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
// ]

// const filtraFuncionario = funcionarios.filter((index)=>{
//     return index.setor === parametro
// })

// console.log(filtraFuncionario)


// 5

// const usuarios = [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ]

// const filtraUsuarios = usuarios.filter( index => index.role === "admin")

// const filtraEmail = filtraUsuarios.map ( index => index.email)

// console.log(filtraEmail)

// 6 

// const clientes = [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

// const saldoDoCliente = clientes.filter((index) =>{

// 	const totalDebitos = index.debitos.reduce((dadoA, dadoB) => dadoA + dadoB, 0)

// 	const total: Number = index.saldoTotal - totalDebitos

// 	if(total < 0){
// 		const negativo = {
// 			...index,
// 			saldoTotal: total, 
// 			debitos: [] 
// 		}
// 		return negativo
// 	}
// })

// console.log(saldoDoCliente)