import 'dart:io';

class Node {
  int data;
  Node? next;

  Node(this.data);
}

class LinkedList {
  Node? head;

  void addAtPosition(int value, int position) {
    Node newNode = Node(value);
    if (position == 0) {
      newNode.next = head;
      head = newNode;
    } else {
      Node? current = head;
      int currentPosition = 0;
      while (current != null && currentPosition < position - 1) {
        current = current.next;
        currentPosition++;
      }
      if (current != null) {
        newNode.next = current.next;
        current.next = newNode;
      }
    }
  }

  void removeAtPosition(int position) {
    if (head == null) return;
    if (position == 0) {
      head = head?.next;
      return;
    }
    Node? current = head;
    int currentPosition = 0;
    while (current != null && currentPosition < position - 1) {
      current = current.next;
      currentPosition++;
    }
    if (current != null && current.next != null) {
      current.next = current.next?.next;
    }
  }

void printList() {
  Node? current = head;
  List<int> elements = [];
  
  while (current != null) {
    elements.add(current.data);
    current = current.next;
  }

  print(elements.join(',')); 
}

}


String cleanInput(String input) {
  return input.replaceAll(RegExp(r'[^0-9]'), '').trim();
}

Future<void> processFile(String filePath) async {
  final file = File(filePath);
  List<String> lines = await file.readAsLines();

  LinkedList list = LinkedList();

  List<String> initialNumbers = lines[0].split(' ');
  for (var num in initialNumbers) {
    String cleanedNum = cleanInput(num);
    if (cleanedNum.isNotEmpty) {
      list.addAtPosition(int.parse(cleanedNum), 0);
    }
  }

  int numActions = int.parse(lines[1]);
  for (int i = 0; i < numActions; i++) {
    List<String> parts = lines[i + 2].split(' ');
    String command = parts[0];

    if (command == 'A') { 
      int value = int.parse(cleanInput(parts[1]));
      int position = int.parse(cleanInput(parts[2]));
      list.addAtPosition(value, position);
    } else if (command == 'R') { 
      int position = int.parse(cleanInput(parts[1]));
      list.removeAtPosition(position);
    } else if (command == 'P') { 
      list.printList();
    }
  }
}

void main() async {
  await processFile('arq-novo.txt');
}
