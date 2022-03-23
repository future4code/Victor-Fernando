// 1
// function checaTriangulo(a:Number, b:Number, c:Number): string {
//     if (a !== b && b !== c) {
//       return "Escaleno";
//     } else if (a === b && b === c) {
//       return "Equilátero";
//     } else {
//       return "Isósceles";
//     }
//   }
// console.log(checaTriangulo(2, 2, 3))
// 2
// function imprimeTresCoresFavoritas() {
//     const cor1 = prompt("Insira sua primeira cor favorita")
//     const cor2 = prompt("Insira sua segunda cor favorita")
//     const cor3 = prompt("Insira sua terceira cor favorita")
//     console.log([cor1, cor2, cor3])
//  }
// console.log(imprimeTresCoresFavoritas()) 
// 3
// function checaAnoBissexto(ano:number) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
// }
// if(checaAnoBissexto(1996)){
//     console.log("È bissextos.")
// } else{
//     console.log("Não é bissextos.")
// }
// 4
// function comparaDoisNumeros(num1:Number, num2:Number): Number {
//     let maiorNumero:Number;
//     let menorNumero:Number;
//     if (num1 > num2) {
//         maiorNumero = num1;
//         menorNumero = num2;
//     } else {
//         maiorNumero = num2;
//         menorNumero = num1;
//     }
//     const diferenca = Number(maiorNumero) - Number(menorNumero);
//     return diferenca 
// }
// console.log(comparaDoisNumeros(5, 10))
// 5
function checaRenovacaoRG() {
    var anoAtual = Number(prompt("Digite o ano atual"));
    var anoNascimento = Number(prompt("Digite o ano de nascimento"));
    var anoEmissao = Number(prompt("Digite o ano de emissão do documento"));
    var idade = anoAtual - anoNascimento;
    var tempoCarteira = anoAtual - anoEmissao;
    var cond1 = idade <= 20 && tempoCarteira >= 5;
    var cond2 = idade > 20 && idade <= 50 && tempoCarteira >= 10;
    var cond3 = idade > 50 && tempoCarteira >= 15;
    return (cond1 || cond2 || cond3);
}
checaRenovacaoRG();
