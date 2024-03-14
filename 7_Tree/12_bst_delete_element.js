/**
 * [Binary Search Tree]
 *
 * Delete an element from BST
 *
 * 3 types of nodes to be deleted:
 * (a) leaf node (no child nodes)
 * (b) has ONE child node
 * (c) has TWO child node [HARD IMPLEMENTATION]
 * 
 * [In case (c), we copy-paste the value of the INORDER SUCCESSOR to the current node & delete the inorder successor.
 * Inorder successor of the node: Minimum value of the right subtree].
     
 *
 * {@link https://www.youtube.com/watch?v=lml2E9SIJHo&list=PLC3y8-rFHvwjPxNAKvZpdnsr41E0fCMMP&index=73}
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

  bfs() {
    if (this.root == null) return;

    let result = [];
    let queue = [];

    const func = (node) => {
      if (node == null) return;
      queue.unshift(node);

      while (queue.length > 0) {
        const popppedNode = queue.pop();
        result.push(popppedNode.value);

        if (popppedNode.left) queue.unshift(popppedNode.left);
        if (popppedNode.right) queue.unshift(popppedNode.right);
      }
    };
    func(this.root);
    console.log("bfs: ", result);
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

  deleteNode(root, value) {
    if (root == null) return root;

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // this is node that needs to be deleted

      // (a) leaf node condition (no child nodes)
      if (!root.left && !root.right) {
        return null; // remove the node from tree
      }
      // (b) has ONE child node
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      // (c) has TWO child nodes
      // (In this scenario we copy-paste the value of the INORDER SUCCESSOR to the current node & delete the inorder successor)
      // Inorder successor of the node: Minimum value of the right subtree.
      root.value = this.minNode(node.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

bst.bfs();
bst.deleteNode(bst.root, 15);
bst.bfs();
