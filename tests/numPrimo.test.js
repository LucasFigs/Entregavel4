const verificarNumeroPrimo = require('../src/functions/numPrimo');

describe('Testes para verificação de números primos', () => {
  test('Números primos retornam true', () => {
    expect(verificarNumeroPrimo(2)).toBe(true);
    expect(verificarNumeroPrimo(7)).toBe(true);
    expect(verificarNumeroPrimo(13)).toBe(true);
  });

  test('Números não primos retornam false', () => {
    expect(verificarNumeroPrimo(1)).toBe(false);
    expect(verificarNumeroPrimo(4)).toBe(false);
    expect(verificarNumeroPrimo(15)).toBe(false);
  });

  test('Deve lançar erro para entrada inválida', () => {
    expect(() => verificarNumeroPrimo("abc")).toThrow();
    expect(() => verificarNumeroPrimo(-5)).toThrow();
    expect(() => verificarNumeroPrimo(3.14)).toThrow();
  });

  test('Casos especiais', () => {
    expect(verificarNumeroPrimo(0)).toBe(false);
    expect(verificarNumeroPrimo(7919)).toBe(true); // Um primo grande
  });
});