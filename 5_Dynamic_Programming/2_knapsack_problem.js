/**
 * Knapsack problem
 * 
 * [RECURSIVE BACKTRACKING]
 * 
 * Given N items where each item has some weight and profit associated with it and also given a 
 * bag with capacity W, [i.e., the bag can hold at most W weight in it]. The task is to put the
 *  items into the bag such that the sum of profits associated with them is the maximum possible. 

Note: The constraint here is we can either put an item completely into the bag or cannot put it
at all [It is not possible to put a part of an item into the bag].
 */

// #TODO: Method 1: Using Recursive backtracking approach (On a decision tree)
let weights = [1, 4, 5];
let profits = [3, 1, 2];

// Find all possible combinations of weight
// By recursive backtracking, as this will be a DECISION TREE
const powersets = (a, W) => {
  const backtrack = (depth, subset, result) => {
    // base case
    if (depth == a.length) {
      // console.log(subset);
      if (subset.length == 0) return;
      let sum = subset.reduce((curr, res) => curr + res, 0);
      if (sum > W) return;
      result.push([...subset]);
      return;
    }

    subset.push(a[depth]); // include item
    backtrack(depth + 1, subset, result); // backtrack
    subset.pop(); // not include item
    backtrack(depth + 1, subset, result); // backtrack
  };

  const result = [];
  backtrack(0, [], result);
  console.log("Result: ", result);
  return result;
};

let W = 5;
const subsets = powersets(weights, W);

// Now calculate the MAX PROFIT for these WEIGHT combinations (subsets)
// and return the MAX PROFIT
