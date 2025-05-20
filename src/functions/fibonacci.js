function fibonacci(quantidadeTermos) {
  if (typeof quantidadeTermos !== 'number' || quantidadeTermos < 0 || !Number.isInteger(quantidadeTermos)) {
    throw new Error('A entrada deve ser um número inteiro positivo.');
  }

  const sequencia = [];
  let termoAnterior = 0,
      termoAtual = 1;

  for (let i = 0; i < quantidadeTermos; i++) {
    sequencia.push(termoAnterior);
    const proximoTermo = termoAnterior + termoAtual;
    termoAnterior = termoAtual;
    termoAtual = proximoTermo;
  }

  return sequencia;
}

module.exports = fibonacci;