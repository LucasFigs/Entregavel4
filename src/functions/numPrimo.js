function verificarNumeroPrimo(numero) {
  // Validação de entrada
  if (typeof numero !== 'number' || !Number.isInteger(numero) || numero < 0) {
    throw new Error('O valor deve ser um número inteiro positivo');
  }

  // Casos especiais
  if (numero < 2) return false;
  if (numero === 2) return true;
  if (numero % 2 === 0) return false;

  // Verificação de primalidade
  const limite = Math.sqrt(numero);
  for (let i = 3; i <= limite; i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = verificarNumeroPrimo;