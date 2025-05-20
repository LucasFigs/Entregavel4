const calcularMDC = require('../src/functions/mdc');

describe('Testes para o algoritmo MDC', () => {
  test('MDC de 56 e 98 deve ser 14', () => {
    expect(calcularMDC(56, 98)).toBe(14);
  });

  test('MDC de números primos entre si deve ser 1', () => {
    expect(calcularMDC(15, 28)).toBe(1);
  });

  test('Deve retornar o valor absoluto para números negativos', () => {
    expect(calcularMDC(-12, 18)).toBe(6);
  });

  test('Deve lançar erro para entradas não numéricas', () => {
    expect(() => calcularMDC("abc", 10)).toThrow();
  });

  test('MDC com zero deve retornar o outro número', () => {
    expect(calcularMDC(0, 5)).toBe(5);
  });

  test('MDC(0,0) deve retornar undefined', () => {
    expect(calcularMDC(0, 0)).toBeUndefined();
  });
});