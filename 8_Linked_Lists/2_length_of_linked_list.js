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
// head.next.next.next = new Node(4);

// Print Linked List
traverseLinkedList(head);

// Length of a Linked List
function findLengthOfLL(node) {
  let curr = node;
  let len = 0;
  while (curr !== null) {
    len++;
    curr = curr.next;
  }
  // console.log("Length of given LL is: ", len);
  return len;
}
// findLengthOfLL(head);
