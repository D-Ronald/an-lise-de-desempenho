class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def add_at_position(self, value, position):
        new_node = Node(value)
        if position == 0:
            new_node.next = self.head
            self.head = new_node
        else:
            current = self.head
            current_position = 0
            while current and current_position < position - 1:
                current = current.next
                current_position += 1
            if current:
                new_node.next = current.next
                current.next = new_node

    def remove_at_position(self, position):
        if position == 0 and self.head:
            self.head = self.head.next
        else:
            current = self.head
            current_position = 0
            while current and current_position < position - 1:
                current = current.next
                current_position += 1
            if current and current.next:
                current.next = current.next.next

    def print_list(self):
        current = self.head
        elements = []
        while current:
            elements.append(str(current.data))
            current = current.next
        print(",".join(elements))

def process_file(file_path):
    linked_list = LinkedList()
    with open(file_path, 'r', encoding='utf-8-sig') as file:
        lines = file.readlines()

    initial_numbers = list(map(int, lines[0].strip().split()))
    for num in initial_numbers:
        linked_list.add_at_position(num, 0)

    num_actions = int(lines[1].strip())
    actions = lines[2:2 + num_actions]

    for action in actions:
        parts = action.strip().split()
        command = parts[0]
        if command == 'A':
            value = int(parts[1])
            position = int(parts[2])
            linked_list.add_at_position(value, position)
        elif command == 'R':
            position = int(parts[1])
            linked_list.remove_at_position(position)
        elif command == 'P':
            linked_list.print_list()

process_file('H:\\Ronald\\faculdade\\analise de desempenho\\an-lise-de-desempenho\\Atividade_1\\arq2.txt')
process_file('H:\\Ronald\\faculdade\\analise de desempenho\\an-lise-de-desempenho\\Atividade_1\\arq2.txt')