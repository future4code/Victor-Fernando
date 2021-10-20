```
Resposta do Exercícios de Fixação de Javascript 3

function calculaNota(ex, p1, p2) {
  // Escreva seu código aqui
  let notaTotal = ex + p1 + p2
  let media = notaTotal / 3
  let conceito
  
  if(media >= 9){
    conceito = 'A'
  } else if(media < 9 && media >= 7.5){
    conceito = 'B'
  } else if(media < 7.5 && media >= 6){
    conceito = 'C'
  } else if(media < 6){
    conceito = 'D'
  }
  return conceito
}
```