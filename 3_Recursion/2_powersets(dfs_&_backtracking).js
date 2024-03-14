/**
 * Power Set
 * Power Set P(S) of a set S is the set of all subsets of S.
 * If S has n elements then its P(S) will have 2^n elements.
 *
 * Since all possible subsets, this will be a recursive solution to find all potential solutions.
 * [RECURSIVE BACKTRACKING] [DEPTH FIRST SEARCH - Backtracking recursive function]
 *
 * Time: n * 2^n (2^n exponential for the subsets) & (n for the number of elements)
 * Space: O(n)
 */

/**
 * Whenever we deal with recursion, we have to deal with out BASE CASE
 * Since this is a DEPTH FIRST SEARCH, our base case will be when we reach a LEAD NODE
 */

// Method #1: DFS Solution
function powerSet_DFS(str, depth, subset, result) {
  // Base condition: Reach a 'Leaf node'
  if (depth == str.length) {
    result.push(subset);
    return;
  }
  powerSet_DFS(str, depth + 1, subset + str[depth], result);
  powerSet_DFS(str, depth + 1, subset, result);
  return result;
}

let str = "abc";
let result = [];
powerSet_DFS(str, 0, "", result);
console.log("PowerSets are: ", result, "Length of PowerSets:", result.length);

// Method #1: RECURSIVE BACKTRACK Solution
// Recursive Backtracking is a Depth-First-Search on a "decision tree"

function PowerSets_RecursiveBacktrack(a, depth, subset, result) {
  // Base condition: Leaf node
  if (depth == a.length) {
    result.push([...subset]);
    return;
  }
  subset.push(a[depth]); // Include the item
  PowerSets_RecursiveBacktrack(a, depth + 1, subset, result); // Backtrack
  subset.pop(); // Not include the item
  PowerSets_RecursiveBacktrack(a, depth + 1, subset, result); // Backtrack

  return result;
}
let a = [1, 2, 3];
let result1 = [];
PowerSets_RecursiveBacktrack(a, 0, [], result1);
console.log("Powersets are (Using backtracking) are: ", result1);
