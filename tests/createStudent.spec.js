/* eslint-disable max-len */

const createStudent = require('../src/createStudent');

/*
  A função createStudent recebe como parâmetro um nome, e retorna um objeto contendo duas chaves:

    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Implemente a função de forma que ela atenda aos testes propostos.

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const goodPerson = 'Eita pessoa boa!';

describe('5 - Implemente a função `createStudent`', () => {
  it('Verifica se a função `createStudent` retorna o objeto esperado', () => {
    const estudante = createStudent('Leandrão, o Lobo Solitário');
    expect(typeof estudante).toBe('object');
    expect(typeof estudante.feedback).toBe('function');
    expect(estudante.name).toMatch(/Leandrão, o Lobo Solitário/);
    expect(estudante.feedback()).toBe(goodPerson);

    const estudante2 = createStudent('Nobre');
    expect(typeof estudante2).toBe('object');
    expect(typeof estudante2.feedback).toBe('function');
    expect(estudante2.name).toMatch(/Nobre/);
    expect(estudante2.feedback()).toBe(goodPerson);

    const estudante3 = createStudent('Inácio');
    expect(typeof estudante3).toBe('object');
    expect(typeof estudante3.feedback).toBe('function');
    expect(estudante3.name).toMatch(/Inácio/);
    expect(estudante3.feedback()).toBe(goodPerson);
  });
});
