import time
import tracemalloc

def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

def main():
    tracemalloc.start()


    start_time = time.time()


    try:
        with open("Atividade_3\\bubble\\arq.txt", "r") as file:
            elements = [line.strip() for line in file.readlines()]
    except FileNotFoundError:
        print("O arquivo 'input.txt' não foi encontrado.")
        return

    bubble_sort(elements)

    with open("aAtividade_3\\bubble\\arq-saida_bubble_py.txt", "w") as output_file:
        for element in elements:
            output_file.write(element + "\n")

    end_time = time.time()

    current_memory, peak_memory = tracemalloc.get_traced_memory()
    tracemalloc.stop()

    print(f"Tempo gasto na execução: {end_time - start_time:.5f} segundos")
    print(f"Memória utilizada: {current_memory / 1024:.2f} KB")
    print(f"Pico de memória: {peak_memory / 1024:.2f} KB")

if __name__ == "__main__":
    main()
