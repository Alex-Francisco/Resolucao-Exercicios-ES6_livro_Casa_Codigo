/*
Crie uma função calculaAreaTotal que recebe um parâmetro:

dimensoes: objeto que possui as propriedades altura e comprimento que são números inteiros
A função deve retornar a soma de todas as áreas. Tome como base a entrada a seguir:

var dimensoes = [
  { altura: 10, comprimento: 20},
  { altura: 2, comprimento: 4},
  { altura: 1, comprimento: 1},
  { altura: 50, comprimento: 50}
]
Exemplo: calculaAreaTotal(dimensoes) → 2709
*/

var dimensoes = [
    { altura: 10, comprimento: 20},
    { altura: 2, comprimento: 4},
    { altura: 1, comprimento: 1},
    { altura: 50, comprimento: 50}
  ]

function calculaAreaTotal(dimensoesPassadas) {
    return dimensoesPassadas.reduce(function(anterior, valor) {
        return anterior + (valor.altura * valor.comprimento);
    }, 0);
}

console.log(calculaAreaTotal(dimensoes));