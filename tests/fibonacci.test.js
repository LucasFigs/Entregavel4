const fibonacci = require('../src/functions/fibonacci');

describe('Teste da função Fibonacci', () => {
  test('Deve retornar os primeiros 5 termos corretamente', () => {
    expect(fibonacci(5)).toEqual([0, 1, 1, 2, 3]);
  });

  test('Deve retornar [0] para quantidadeTermos = 1', () => {
    expect(fibonacci(1)).toEqual([0]);
  });

  test('Deve lançar erro para entrada não numérica', () => {
    expect(() => fibonacci("abc")).toThrow();
  });
});