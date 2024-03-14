/**
 * [Binary Search Tree]
 *
 * min-max element in the BST
 * leftmost is the minimum
 * rightmost is the maximum
 *
 * {@link https://www.youtube.com/watch?v=lml2E9SIJHo&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=69}
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      // left tree
      if (root.left == null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      // right tree
      if (root.right == null) {
        root.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }

  // Left most node is MINIMUM in BST
  minNode(node) {
    if (!node.left) return console.log("MIN: ", node.value);
    else this.minNode(node.left);
  }

  // Right most node is MAXIMUM in BST
  maxNode(node) {
    if (!node.right) return console.log("MAX: ", node.value);
    else this.minNode(node.right);
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.minNode(bst.root);
bst.maxNode(bst.root);
