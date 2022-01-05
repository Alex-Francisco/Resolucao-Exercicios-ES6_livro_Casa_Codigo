/*
Utilizando o método map, escreva o método dobrar que recebe um array de números inteiros e retorna um array com
todos os valores do array original dobrados.

Exemplo: dobrar([1,2,3]) → [2,4,6]
*/

function dobrar(numerosInteiros) {
    return numerosInteiros.map(function(numero) {
        return numero * 2;
    });
}

console.log(dobrar([1, 2, 3]));