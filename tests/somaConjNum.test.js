const calcularSoma = require('../src/functions/somaConjNum');

describe('Testes para a função de soma', () => {
  test('Soma de números positivos', () => {
    expect(calcularSoma([1, 2, 3, 4])).toBe(10);
  });

  test('Soma de números negativos', () => {
    expect(calcularSoma([-1, -2, -3])).toBe(-6);
  });

  test('Soma de array vazio retorna 0', () => {
    expect(calcularSoma([])).toBe(0);
  });

  test('Soma de números decimais', () => {
    expect(calcularSoma([1.5, 2.5, 3.1])).toBeCloseTo(7.1);
  });

  test('Deve lançar erro para entrada não array', () => {
    expect(() => calcularSoma("não é array")).toThrow();
  });

  test('Deve lançar erro para elementos não numéricos', () => {
    expect(() => calcularSoma([1, 2, "a"])).toThrow();
  });
});