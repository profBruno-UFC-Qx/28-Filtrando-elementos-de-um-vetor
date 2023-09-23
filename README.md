# Descrição

Neste exercício, você irá uma função que filtra um vetor com base em um critério qualquer de filtragem. 

Objetivo desse exercício é praticar a manipualção de vetores em JavaScript. 

**Todas as alterações devem ser feitas nos arquivos já existentes**

* src/main.js -> quando for necessário alterar JavaScript

## Instruções:

Considere que uma tarefa é representada por objeto que possui as seguintes propriedades como mostra o exemplo abaixo: título, concluida e prioridade.

Exemplos de tarefas:

```js
const tarefas = [
  { titulo: "Estudar JavaScript", concluida: false, prioridade: 2 };
  { titulo: "Estudar HTML e CSS", concluida: true, prioridade: 1 }
]
```

1. Crie uma função chamada `filtrarTarefas` que aceita três argumentos: o vetor de tarefas, o critério de filtragem e o valor para aplicar o filtro.
2. Implemente a lógica para filtrar o vetor com base no critério e valor fornecidos. 
  * Por exemplo, se o critério for "concluidas" e o valor for true, filtre as tarefas concluídas.
  * Considere apenas o critério de igualdade
3. A função deve retornar um novo vetor contendo apenas as tarefas que atendem ao critério de filtragem.


Exemplo:

```js
const tarefas = [
  { titulo: "Estudar JavaScript", concluida: false },
  { titulo: "Fazer compras", concluida: true },
  // ...
];

const tarefasConcluidas = filtrarTarefas(tarefas, "concluidas", true);
console.log(tarefasConcluidas); // [{ titulo: "Fazer compras", concluida: true }]
```

