/*Curso de Engenharia de Software - UniEVANGÉLICA 
Disciplina de Programação Web 
Dev: Renan Oliveira Matos
DATA: 22/05/2023 */


// Função para adicionar um item 
function adicionarItem() {
    var input = document.getElementById("item");
    var lista = document.getElementById("lista");
    var novoItem = document.createElement("li");
    novoItem.innerText = input.value;
    lista.appendChild(novoItem);
    input.value = "";
}

// - Captura o elemento de entrada do documento utilizando o identificador "item" e o armazena na variável "input".
// - Captura o elemento de lista do documento utilizando o identificador "lista" e o armazena na variável "lista".
// - Cria um novo elemento <li> utilizando a função createElement() e o armazena na variável "novoItem".
// - Define o conteúdo do novo elemento utilizando a propriedade innerText e o valor presente no elemento de entrada.
// - Adiciona o novo elemento à lista existente utilizando a função appendChild().
// - Remove o valor presente no elemento de entrada, atribuindo uma string vazia à propriedade value.