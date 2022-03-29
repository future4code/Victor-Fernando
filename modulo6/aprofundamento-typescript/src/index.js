// 1
// a
// const minhaString: string = 1
// Gera um erro que o tipo 'number' não pode ser atribuído ao tipo 'string'.
// b
// let meuNumero: Number | string = 2
// Podemo usar o chamado union type para adicionar dois tipos a uma variaveu.
// c
// type User = {
//     nome: string,
//     idade: Number,
//     corFavorita: string
// }
// const user1: User = {
//     nome: "Phelipe",
//     idade: 20,
//     corFavorita: "Amarelo"
// }
// const user2: User = {
//     nome: "Camila",
//     idade: 22,
//     corFavorita: "Azul"
// }
// const user3: User = {
//     nome: "Rosa",
//     idade: 18,
//     corFavorita: "Verde"
// }
// d 
// type User = {
//     nome: string,
//     idade: Number,
//     corFavorita: string
// }
// enum CorFavorita {
//     VERMELHO = "vermelha", 
//     LARANJA = "laranja", 
//     AMARELO = "amarela", 
//     VERDE = "verde", 
//     AZUL = "azul", 
//     AZULESCURO= "azul-escuro",
//     VIOLETA = "violeta"
// }
// const user1: User = {
//     nome: "Phelipe",
//     idade: 20,
//     corFavorita: CorFavorita.AMARELO
// }
// const user2: User = {
//     nome: "Camila",
//     idade: 22,
//     corFavorita: CorFavorita.AZUL
// }
// const user3: User = {
//     nome: "Rosa",
//     idade: 18,
//     corFavorita: CorFavorita.VERDE
// }
// 2
function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return Number(a) - Number(b); });
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma = soma + Number(num);
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
console.log(obterEstatisticas([5, 2, 8, 9]));
