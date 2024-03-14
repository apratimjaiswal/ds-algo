// Define a class node for the Linked List
class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

// Create a Linked List
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
// head.next.next.next = new Node(4);

function isCircularLL(node) {
  if (!node) return false;

  let slow = node;
  let fast = node;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
}
console.log("Check if circular LL: ", isCircularLL(head));

// Efficient solution using FAST & SLOW pointers
function findMiddleElement_FastPointer(node) {
  if (!node) return;

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
