const fs = require('fs');
const { performance } = require('perf_hooks');

function bubbleSort(arr, key) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (key(arr[j]) > key(arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

function main() {
    try {
        const startTime = performance.now();

        let elements = fs.readFileSync('Atividade_3\\bubble\\arq.txt', 'utf-8').split('\n').map(line => line.trim()).filter(Boolean);

        let key;
        if (elements.every(el => !isNaN(Number(el)))) {

            elements = elements.map(Number);
            key = x => x;
        } else {

            key = x => x.toLowerCase();
        }

        bubbleSort(elements, key);

        fs.writeFileSync('Atividade_3\\bubble\\arq-saida_bubble_js.txt', elements.join('\n'), 'utf-8');

        const endTime = performance.now();

        const memoryUsage = process.memoryUsage();
        console.log(`Tempo gasto na execução: ${(endTime - startTime).toFixed(5)} ms`);
        console.log(`Memória utilizada: ${(memoryUsage.heapUsed / 1024).toFixed(2)} KB`);
        console.log(`Pico de memória: ${(memoryUsage.heapTotal / 1024).toFixed(2)} KB`);
    } catch (error) {
        console.error("Erro:", error.message);
    }
}

main();
