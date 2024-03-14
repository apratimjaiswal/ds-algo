// Define a class node for the Linked List
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Linked List traversal
function traverseLinkedList(node) {
  let current = node;
  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

// Create a Linked List
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

// Print Linked List
traverseLinkedList(head);
