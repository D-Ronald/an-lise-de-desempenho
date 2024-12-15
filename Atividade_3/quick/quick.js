const fs = require('fs');
const { performance } = require('perf_hooks');

function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        const pivot = arr[Math.floor(arr.length / 2)];
        const left = arr.filter(x => x < pivot);
        const middle = arr.filter(x => x === pivot);
        const right = arr.filter(x => x > pivot);
        return [...quicksort(left), ...middle, ...quicksort(right)];
    }
}

function main() {
    try {

        const startTime = performance.now();

        const filePath = "Atividade_3/quick/arq.txt";
        let elements = fs.readFileSync(filePath, 'utf-8').split('\n').map(line => line.trim()).filter(Boolean);

        let numeric = true;
        elements = elements.map(el => {
            const num = parseFloat(el);
            if (isNaN(num)) {
                numeric = false;
                return el.toLowerCase()
            }
            return num
        });

        const sortedElements = quicksort(elements);

        const outputPath = "Atividade_3/quick/arq-saida_Quick_js.txt";
        fs.writeFileSync(outputPath, sortedElements.join('\n'), 'utf-8');

        const endTime = performance.now();

        const memoryUsage = process.memoryUsage();
        console.log(`Tempo gasto na execução: ${(endTime - startTime).toFixed(5)} ms`);
        console.log(`Memória utilizada: ${(memoryUsage.heapUsed / 1024).toFixed(2)} KB`);
        console.log(`Pico de memória: ${(memoryUsage.heapTotal / 1024).toFixed(2)} KB`);
    } catch (error) {
        console.error("Erro:", error.message);
    }
}
64
main();
