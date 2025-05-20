function calcularMDC(a, b) {
  // Validação de entrada
  if (typeof a !== 'number' || typeof b !== 'number' || !Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error('Ambos os valores devem ser números inteiros');
  }

  // Garante que trabalhamos com valores absolutos
  a = Math.abs(a);
  b = Math.abs(b);

  // Caso especial para zero
  if (a === 0 && b === 0) return undefined; // MDC(0,0) é indefinido
  if (b === 0) return a;
  if (a === 0) return b;

  // Algoritmo de Euclides
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

module.exports = calcularMDC;