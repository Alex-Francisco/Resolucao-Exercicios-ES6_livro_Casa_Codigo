/*
Crie uma função chamada calculaRaizesQuadradas que recebe um array de números inteiros positivos
e devolve um outro array com as raízes quadradas correspondentes de cada um dos itens.

para este exercício, assuma que a entrada terá somente números com raiz exata.
utilize a função Math.sqrt para calcular a raiz quadrada
*/

function calculaRaizesQuadradas(arrayNumeros) {
    return arrayNumeros.map(function(numero) {
        return Math.sqrt(numero);
    });
}

console.log(calculaRaizesQuadradas([9, 25, 64]));