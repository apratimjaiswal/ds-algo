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

function findMiddleElementOfLL(node) {
  let curr = node;
  let len = findLengthOfLL(node);

  // let i = 0;
  curr = node;
  for (let i = 0; i < Math.floor(len / 2); i++) curr = curr.next;
  console.log("Middle element is: ", curr.value);
}
findMiddleElementOfLL(head);

// Efficient solution using FAST & SLOW pointers
function findMiddleElement_FastPointer(node) {
  let slow = node;
  let fast = node;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  console.log("Middle: ", slow);
  return slow;
}
findMiddleElement_FastPointer(head);
