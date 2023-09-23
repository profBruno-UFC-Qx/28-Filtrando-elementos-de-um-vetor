const filtrarTarefas = require('./src/main.js');

test('A função filtrarTarefas existe', () => {
  expect(filtrarTarefas).toBeDefined()
  expect(typeof filtrarTarefas).toBe("function");
});


test('Filtrando um vetor vazio', () => {
  const tarefas = []
  const resultado = filtrarTarefas(tarefas, 'concluida', false)
  expect(resultado.length).toBe(0);
  expect(resultado).toEqual([]);
  
});

test('Filtrando por conclusão', () => {
  const tarefas = [
    { titulo: "Estudar JavaScript", concluida: false, prioridade: 1 },
    { titulo: "Fazer compras", concluida: true, prioridade: 1 },
  ]
  let resultado = filtrarTarefas(tarefas, 'concluida', false)
  expect(resultado.length).toBe(1);
  tarefas.splice(1)
  expect(resultado).toEqual(tarefas);

  resultado = filtrarTarefas(tarefas, 'concluida', true)
  expect(resultado).toEqual([]);
});


test('Filtrando por prioridade', () => {
  const tarefas = [
    { titulo: "Estudar JavaScript", concluida: false, prioridade: 1 },
    { titulo: "Fazer compras", concluida: true, prioridade: 1 },
  ]
  const resultado = filtrarTarefas(tarefas, 'prioridade', 1)
  expect(resultado.length).toBe(2);
  expect(resultado).toEqual(tarefas);
});

test('Filtros encadedos', () => {
  const tarefas = [
    { titulo: "Estudar JavaScript", concluida: false, prioridade: 1 },
    { titulo: "Fazer compras", concluida: true, prioridade: 2 },
    { titulo: "Ir ao cinema", concluida: true, prioridade: 0 },
  ]
  let resultado = filtrarTarefas(tarefas, 'concluida', true)
  resultado = filtrarTarefas(resultado, 'prioridade', 0)
  resultado = filtrarTarefas(resultado, 'prioridade', 1)
  expect(resultado.length).toBe(0);
  expect(resultado).toEqual([]);
});
