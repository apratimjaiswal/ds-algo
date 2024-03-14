/**
 * [Binary Search Tree]
 */
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }
}

const bst = new BinarySearchTree();
console.log("Tree is empty? ", bst.isEmpty());
