let tree = {
  value: 3,
  left: {
    value: 9,
    left: {
      value: 1,
    },
    right: {
      value: 2,
    },
  },
  right: {
    value: 20,
    left: {
      value: 15,
    },
    right: {
      value: 7,
    },
  },
};

function LOT(node, level, result) {
  if (!node) return;

  if (result[level]) {
    result[level].push(node.value);
  } else {
    result[level] = [node.value];
  }

  LOT(node.left, level + 1, result);
  LOT(node.right, level + 1, result);
}

let result = [];
LOT(tree, 0, result);

// Reverse LOT printing
while (result.length !== 0) {
  console.log(result.pop());
}
