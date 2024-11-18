import java.io.*;
import java.util.*;

class Node {
    int data;
    Node next;

    public Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    private Node head;

    public LinkedList() {
        head = null;
    }

    public void addAtPosition(int value, int position) {
        Node newNode = new Node(value);
        if (position == 0) { 
            newNode.next = head;
            head = newNode;
        } else {
            Node current = head;
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

    public void removeAtPosition(int position) {
        if (position == 0 && head != null) {
            head = head.next;
        } else {
            Node current = head;
            int currentPosition = 0;
            while (current != null && currentPosition < position - 1) {
                current = current.next;
                currentPosition++;
            }
            if (current != null && current.next != null) {
                current.next = current.next.next;
            }
        }
    }

    public void printList() {
        Node current = head;
        List<Integer> elements = new ArrayList<>();
        while (current != null) {
            elements.add(current.data);
            current = current.next;
        }
        System.out.println(String.join(" -> ", elements.toString().replaceAll("[\\[\\]]", "").split(", ")));
    }
}

public class LinkedListExample {

    public static void processFile(String filePath) throws IOException {
        LinkedList linkedList = new LinkedList();

        BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(filePath), "UTF-8"));

        String[] initialNumbers = reader.readLine().split(" ");
        for (String num : initialNumbers) {
            num = num.replaceAll("[^0-9]", "").trim(); 
            if (!num.isEmpty()) {
                linkedList.addAtPosition(Integer.parseInt(num), 0); 
            }
        }

        int numActions = Integer.parseInt(reader.readLine());

        for (int i = 0; i < numActions; i++) {
            String action = reader.readLine().trim();
            String[] parts = action.split(" ");
            String command = parts[0];

            if (command.equals("A")) {  // Adicionar
                int value = Integer.parseInt(parts[1].replaceAll("[^0-9]", "").trim()); // Limpeza de caracteres
                int position = Integer.parseInt(parts[2].replaceAll("[^0-9]", "").trim());
                linkedList.addAtPosition(value, position);
            } else if (command.equals("R")) {  // Remover
                int position = Integer.parseInt(parts[1].replaceAll("[^0-9]", "").trim());
                linkedList.removeAtPosition(position);
            } else if (command.equals("P")) {  // Imprimir
                linkedList.printList();
            }
        }

        reader.close();
    }

    public static void main(String[] args) throws IOException {
        processFile("arq-novo.txt");
    }
}
