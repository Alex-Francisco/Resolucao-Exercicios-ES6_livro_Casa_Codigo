/*
Implemente uma função chamada calculaDistancia que recebe uma lista de objetos que representam ruas
e faça a soma de seus tamanhos. Cada objeto rua da lista possui as seguintes propriedades:

nome: String que representa o nome da rua
tamanho: Número intero que representa a comprimento da rua em metros
Utilize somente os conceitos que foram apresentados neste capítulo para iterar as ruas. Assuma que sempre haverá
pelo menos uma rua no array.

Tome como exemplo, a entrada abaixo.

var ruas = [
  { nome:'Rua 1', tamanho: 2500 },
  { nome:'Rua 2', tamanho: 3400 },
  { nome:'Rua 3', tamanho: 1400 }
];
Exemplo: calculaDistancia(ruas) → 7300
*/

let ruas = [
    { nome:'Rua 1', tamanho: 2500 },
    { nome:'Rua 2', tamanho: 3400 },
    { nome:'Rua 3', tamanho: 1400 }
  ];

function calculaDistancia(listaPassada) {
  let iterador = listaPassada[Symbol.iterator]();
  let proximo = iterador.next();
  let tamanhoRua = 0;

  do {
    tamanhoRua += proximo.value.tamanho;
    proximo = iterador.next();
  } while (!proximo.done);

  return tamanhoRua;
}

console.log(calculaDistancia(ruas));