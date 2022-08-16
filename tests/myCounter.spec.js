const myCounter = require('../src/myCounter');

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija a função myCounter, sem eliminar nenhum dos loops de repetição, para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

describe('8 - Implemente a função `myCounter`', () => {
  it('Verifica se a função `myCounter` funciona como o esperado', () => {
    const expectedOutput = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
    expect(myCounter()).toEqual(expectedOutput);
  });
});
