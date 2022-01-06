/*
Utilizando o método auxiliar forEach, crie uma função clonaObjeto que recebe como parâmetro
um objeto e cria uma cópia exata dela.

utilize o método Object.getOwnPropertyNames para obter as propriedades do objeto
*/

function clonaObjeto(objetoPassado) {
    let copia = {};
    Object.getOwnPropertyNames(objetoPassado).forEach(function(valor) {
       copia[valor] = objetoPassado[valor];
    });
    return copia;
}

console.log(clonaObjeto([{Nome: 'Alex', Idade: 32}]));