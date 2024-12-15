import time
import tracemalloc

def quicksort(arr):
    """Implementação do algoritmo Quicksort."""
    if len(arr) <= 1:
        return arr
    else:
        pivot = arr[len(arr) // 2]
        left = [x for x in arr if x < pivot]
        middle = [x for x in arr if x == pivot]
        right = [x for x in arr if x > pivot]
        return quicksort(left) + middle + quicksort(right)

def main():
    tracemalloc.start()

    start_time = time.time()

    try:
        with open("Atividade_3\\quick\\arq.txt", "r") as file:
            elements = [line.strip() for line in file.readlines()]
    except FileNotFoundError:
        print("O arquivo 'input.txt' não foi encontrado.")
        return

    try:

        elements = [float(x) for x in elements]
    except ValueError:

        elements = [x.lower() for x in elements]

    sorted_elements = quicksort(elements)

    with open("Atividade_3\\quick\\arq-saida_Quick_py.txt", "w") as output_file:
        for element in sorted_elements:
            output_file.write(f"{element}\n")

    end_time = time.time()

    current_memory, peak_memory = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    print(f"Tempo gasto na execução: {end_time - start_time:.5f} segundos")
    print(f"Memória utilizada: {current_memory / 1024:.2f} KB")
    print(f"Pico de memória: {peak_memory / 1024:.2f} KB")

if __name__ == "__main__":
    main()
