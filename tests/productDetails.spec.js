const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
     // Teste se productDetails é uma função.
     expect(typeof productDetails).toBe('function');
     // Teste se o retorno da função é um array.
     expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBeTruthy();
     // Teste se o array retornado pela função contém dois itens dentro.
     expect((productDetails('Alcool gel', 'Máscara').length)).toBe(2);
     // Teste se os dois itens dentro do array retornado pela função são objetos.
     const func = productDetails('Alcool gel', 'Máscara');
     expect(typeof func[0]).toBe('object');
     expect(typeof func[1]).toBe('object');
     expect(func[0]).not.toBeNull();
     expect(func[1]).not.toBeNull();
     expect(Array.isArray(func[0])).toBeFalsy();
     expect(Array.isArray(func[1])).toBeFalsy();
     // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
     expect(func[0]).not.toEqual(func[1])
     // Teste se os dois productIds terminam com 123.
     expect(func[0].details.productId.endsWith('123')).toBeTruthy();
     expect(func[1].details.productId.endsWith('123')).toBeTruthy();

  });
});
