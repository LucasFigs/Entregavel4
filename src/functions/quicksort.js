function ordenarPorQuicksort(array) {
    // Validação de entrada
    if (!Array.isArray(array)) {
        throw new Error('A entrada deve ser um array');
    }

    // Verifica se todos os elementos são números
    if (array.some(item => typeof item !== 'number' || isNaN(item))) {
        throw new Error('O array deve conter apenas números');
    }

    // Caso base para arrays vazios ou com um elemento
    if (array.length <= 1) {
        return [...array]; // Retorna uma cópia para evitar efeitos colaterais
    }

    // Faz uma cópia do array para não modificar o original
    const arr = [...array];
    
    // Função de particionamento
    function partition(low, high) {
        const pivot = arr[high];
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        
        [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
        return i + 1;
    }

    // Função recursiva principal
    function quickSortRecursive(low, high) {
        if (low < high) {
            const pi = partition(low, high);
            quickSortRecursive(low, pi - 1);
            quickSortRecursive(pi + 1, high);
        }
    }

    quickSortRecursive(0, arr.length - 1);
    return arr;
}

module.exports = ordenarPorQuicksort;