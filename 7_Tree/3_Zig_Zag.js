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

function ZigZag(node, level, result) {
  if (!node) return;

  if (result[level]) result[level].push(node.value);
  else result[level] = [node.value];

  ZigZag(node.left, level + 1, result);
  ZigZag(node.right, level + 1, result);
}

let result = [];
ZigZag(tree, 0, result);
console.log(result);

// Zig-Zag traversal
for (let i = 0; i < result.length; i++) {
  if (i % 2 == 0) console.log(result[i]);
  else console.log(result[i].reverse());
}
