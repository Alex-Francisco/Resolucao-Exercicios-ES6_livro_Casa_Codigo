/*
Utilizando os aprendizados deste capítulo, implemente a função soletraPalavra que recebe
como único parâmetro uma String e então exibe cada letra da String em uma linha do console.
*/

function soletraPalavra (stringPassada) {
    let iterador = stringPassada[Symbol.iterator]();
    let letra = iterador.next();
    do {
        console.log(letra.value);
        letra = iterador.next();
    }
    while(!letra.done);
}

console.log(soletraPalavra('Alex'));