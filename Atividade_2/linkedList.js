class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addAtPosition(value, position) {
      const newNode = new Node(value);
      if (position === 0) { 
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let current = this.head;
        let currentPosition = 0;
        while (current && currentPosition < position - 1) {
          current = current.next;
          currentPosition++;
        }
        if (current) {
          newNode.next = current.next;
          current.next = newNode;
        }
      }
    }
  
    removeAtPosition(position) {
      if (position === 0 && this.head) {
        this.head = this.head.next;
      } else {
        let current = this.head;
        let currentPosition = 0;
        while (current && currentPosition < position - 1) {
          current = current.next;
          currentPosition++;
        }
        if (current && current.next) {
          current.next = current.next.next;
        }
      }
    }
  
    printList() {
      let current = this.head;
      let elements = [];
      while (current) {
        elements.push(current.data);
        current = current.next;
      }
      console.log(elements.join(","));
    }
  }
  
  function processFile(filePath) {
    const fs = require('fs');
    const linkedList = new LinkedList();
  
    const data = fs.readFileSync(filePath, 'utf8').split('\n');

    const initialNumbers = data[0].split(' ').map(Number);
    for (let num of initialNumbers) {
      linkedList.addAtPosition(num, 0); 
    const numActions = parseInt(data[1].trim());
    const actions = data.slice(2, 2 + numActions);
  
    for (let action of actions) {
      const parts = action.trim().split(' ');
      const command = parts[0];
  
      if (command === 'A') { 
        const value = parseInt(parts[1]);
        const position = parseInt(parts[2]);
        linkedList.addAtPosition(value, position);
      } else if (command === 'R') {  
        const position = parseInt(parts[1]);
        linkedList.removeAtPosition(position);
      } else if (command === 'P') {  
        linkedList.printList();
      }
    }
  }

  processFile('H:\\Ronald\\faculdade\\analise de desempenho\\an-lise-de-desempenho\\Atividade_2\\arq-novo.txt');
  
}