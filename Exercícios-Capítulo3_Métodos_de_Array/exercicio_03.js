/*
Escreva o método caps que recebe um array de strings e retorna um outro array com todas
as strings do array original em CAIXA ALTA.

Exemplo: caps(['oi', 'tudo', 'bem?']) → ['OI', 'TUDO', 'BEM?']
*/

function caps(arrayString) {
  return arrayString.map(function(palavra) {
    return palavra.toUpperCase()
  });
}

console.log(caps(['oi', 'tudo', 'bem?']))