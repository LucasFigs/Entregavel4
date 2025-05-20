function contarNumerosNoIntervalo(conjunto, n) {
  // Validação de entrada
  if (!Array.isArray(conjunto) || typeof n !== 'number' || !Number.isInteger(n)) {
    throw new Error('Parâmetros inválidos: conjunto deve ser um array e n deve ser um número inteiro');
  }

  if (conjunto.length === 0) {
    return 0;
  }

  const primeiroValor = conjunto[0];
  let contador = 0;

  for (const num of conjunto) {
    if (typeof num !== 'number') {
      throw new Error('O conjunto deve conter apenas números');
    }
    
    if (num >= primeiroValor && num <= n) {
      contador++;
    }
  }

  return contador;
}

module.exports = contarNumerosNoIntervalo;