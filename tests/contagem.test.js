const contarNumerosNoIntervalo = require('../src/functions/contagem');

describe('Testes para a função de contagem', () => {
  test('Conta números corretamente no intervalo', () => {
    expect(contarNumerosNoIntervalo([5, 3, 7, 10, 2], 10)).toBe(3);
  });

  test('Retorna 0 para array vazio', () => {
    expect(contarNumerosNoIntervalo([], 10)).toBe(0);
  });

  test('Lança erro para parâmetros inválidos', () => {
    expect(() => contarNumerosNoIntervalo("não é array", 10)).toThrow();
    expect(() => contarNumerosNoIntervalo([1, 2, 3], "dez")).toThrow();
  });

  test('Lança erro para elementos não numéricos no conjunto', () => {
    expect(() => contarNumerosNoIntervalo([1, 2, "a"], 10)).toThrow();
  });
});