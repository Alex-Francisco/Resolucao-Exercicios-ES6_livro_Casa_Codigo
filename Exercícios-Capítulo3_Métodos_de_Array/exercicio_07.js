/*
Crie uma função buscar que recebe três parâmetros:

propriedade: Nome da propriedade no objeto
valor: Valor da propriedade no objeto
lista: Lista de objetos onde a busca deve ser executada
Dado estes parâmetros, a função deve buscar na lista e retornar o registro que possui a propriedade com o valor especificado.

Utilize o método find.

var lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 }
]
Exemplo: buscar('nome', 'Tânia', lista) → { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 }
*/

let lista = [
    { nome: 'Tânia', sobrenome: 'Cardoso', idade: 65 },
    { nome: 'Vitória', sobrenome: 'Costa', idade: 83 },
    { nome: 'Erick', sobrenome: 'Ferreira', idade: 16 },
    { nome: 'Emilly', sobrenome: 'Barbosa', idade: 46 }
]

function buscar(propriedade, valor, lista) {
    return lista.find(function(item) {
        return item[propriedade] === valor;
    });
}

console.log(buscar('nome', 'Vitória', lista));