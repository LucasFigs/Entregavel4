function calcularSoma(numeros) {
  // Validação de entrada
  if (!Array.isArray(numeros)) {
    throw new Error('A entrada deve ser um array de números');
  }

  // Verifica se todos os elementos são números válidos
  if (numeros.some(num => typeof num !== 'number' || isNaN(num))) {
    throw new Error('O array deve conter apenas números válidos');
  }

  // Calcula a soma com reduce para maior clareza
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

module.exports = calcularSoma;