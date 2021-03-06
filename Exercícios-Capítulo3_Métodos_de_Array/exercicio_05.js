/*
Faça uma função chamada removeDuplicatas que recebe um array de números inteiros
e remove todas as suas duplicadas.

Utilize as funções auxiliares: reduce e find.

Exemplo: removeDuplicatas([1,2,3,3,4,5]) → [1,2,3,4,5]
*/

function removeDuplicatas (arrayNumeros) {
    return arrayNumeros.reduce(function(numAnterior, valor) {
        let duplicado = numAnterior.find(function(numero) {
            return valor === numero;
        });

        if (!duplicado) {
            numAnterior.push(valor);
        }

        return numAnterior;
    }, []);
}

console.log(removeDuplicatas([1, 2, 3, 3, 4, 5]));