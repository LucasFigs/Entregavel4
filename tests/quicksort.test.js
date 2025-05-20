const ordenarPorQuicksort = require('../src/functions/quicksort');

describe('Testes para o algoritmo Quicksort', () => {
    test('Ordena array de números positivos', () => {
        expect(ordenarPorQuicksort([3, 6, 8, 10, 1, 2, 1])).toEqual([1, 1, 2, 3, 6, 8, 10]);
    });

    test('Ordena array com números negativos', () => {
        expect(ordenarPorQuicksort([-3, -1, -2, 0, 2, 1])).toEqual([-3, -2, -1, 0, 1, 2]);
    });

    test('Mantém array já ordenado', () => {
        expect(ordenarPorQuicksort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Retorna array vazio se a entrada for vazia', () => {
        expect(ordenarPorQuicksort([])).toEqual([]);
    });

    test('Lança erro para entrada não array', () => {
        expect(() => ordenarPorQuicksort("não é array")).toThrow();
    });

    test('Lança erro para array com elementos não numéricos', () => {
        expect(() => ordenarPorQuicksort([1, 2, "a"])).toThrow();
    });
});
