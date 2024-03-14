/**
 * [Binary Search Tree]
 *
 * BFS traversal of Binary Search Tree - Level order traversal
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
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

// BFS or LEVEL ORDER TRAVERSAL
bst.bfs();
// [10]
// [] -> 10
// [15, 5]
// [15] -> 5
// [3, 15]
// [7, 3, 15]
// [7, 3] -> 15
// [7] -> 3
// [] -> 7
// 10, 5, 15, 3, 7
