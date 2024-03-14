let node = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 11,
      left: {
        value: 7,
      },
      right: {
        value: 2,
      },
    },
  },
  right: {
    value: 8,
    left: {
      value: 13,
    },
    right: {
      value: 4,
      right: {
        value: 1,
      },
    },
  },
};

// METHOD #2: DFS method **************************************

function isSumInsideTree(node, targetSum) {
  let currentSum = 0;

  const dfs = (node, currentSum) => {
    if (!node) return;

    currentSum += node.value;

    // console.log("Sum: ", currentSum);
    // Leaf node condition [IMP]
    if (!node.left && !node.right) {
      if (currentSum === targetSum) {
        console.log("Yes *********** ");
        return true;
      } else console.log("No");
      return;
    }

    dfs(node.left, currentSum);
    dfs(node.right, currentSum);
  };

  dfs(node, 0, targetSum);
}

let targetSum = 22;
isSumInsideTree(node, targetSum);

// METHOD #2: BACKTRACKING method **************************************

function isSumInsideTree1(node, targetSum) {
  const backtrack = (node, currentSum) => {
    if (!node) return false;

    console.log(currentSum, targetSum);

    if (currentSum == targetSum) {
      console.log(true);
      return true;
    }
    console.log("saass");

    currentSum = currentSum + node.left.value;
    console.log("Check *** 1st *** BEFORE", currentSum, node.value);
    backtrack(node.left, currentSum);
    currentSum = currentSum - node.left.value;
    console.log("Check *** 1st *** AFTER ", currentSum, node.value);

    console.log("Check *** 2nd *** AFTER ", currentSum, node.value);
    currentSum = currentSum + node.right.value;
    backtrack(node.right, currentSum);
    currentSum = currentSum - node.right.value;
    console.log("Check *** 2nd *** AFTER ", currentSum, node.value);
  };

  backtrack(node, targetSum);
}

let targetSum1 = 22;
isSumInsideTree1(node, targetSum1);
