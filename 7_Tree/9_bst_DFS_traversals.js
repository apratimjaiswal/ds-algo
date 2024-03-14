/**
 * [Binary Search Tree]
 *
 * DFS traversal of a Binary Search Tree - Preorder, Inorder & Postorder
 *
 * PRE-ORDER // root -> left -> right
 * IN-ORDER // left -> root -> right
 * POST-ORDER // left -> right -> root
 *
 * {@link https://www.youtube.com/watch?v=lml2E9SIJHo&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=70}
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

  dfs_preOrder() {
    let result = [];

    const func = (node) => {
      if (node == null) return;

      result.push(node.value); // read root
      func(node.left); // visit left
      func(node.right); // visit right
    };
    func(this.root);
    console.log("dfs pre-order: ", result);
  }

  dfs_inorder() {
    let result = [];

    const func = (node) => {
      if (node == null) return;

      func(node.left); // left
      result.push(node.value); // root
      func(node.right); // right
    };
    func(this.root);
    console.log("dfs in-order: ", result);
  }

  dfs_postorder() {
    let result = [];

    const func = (node) => {
      if (node == null) return;

      func(node.left); // left
      func(node.right); // right
      result.push(node.value); // root
    };
    func(this.root);
    console.log("dfs post-order: ", result);
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.dfs_preOrder(); // root -> left -> right
bst.dfs_inorder(); // left -> root -> right
bst.dfs_postorder(); // left -> right -> root
