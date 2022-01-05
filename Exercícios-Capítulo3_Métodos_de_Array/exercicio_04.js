/*
Utilizando a função auxiliar reduce, escreva uma função chamada validaParenteses que avalia se os parênteses estão balanceados. Isso significa que, pra cada parênteses esquerdo “(“ é necessário ter um parênteses direito “)” correspondente. A função deve aceitar uma string e retornar um valor booleano (true ou false).

Exemplo: validaParenteses(')((()()())))'); → false
Exemplo: "()()()" → true
Exemplo: ")(" → false
*/

function validaParenteses(parenteses) {
  let arrayParenteses = parenteses.split(""); // reduce só funciona com arrays

  let balanceado = !arrayParenteses.reduce(function(soma, parenteses) {
    if (soma < 0) {return soma} // para o caso de começar com ")"
    if (parenteses === "(") {return ++soma}
    if (parenteses === ")") {return --soma}
  }, 0);

  return balanceado;
}

console.log(validaParenteses('()('))