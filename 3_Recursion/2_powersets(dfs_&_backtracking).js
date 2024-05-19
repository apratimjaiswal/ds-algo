/**
 * Power Set
 * Power Set P(S) of a set S is the set of all subsets of S.
 * If S has n elements then its P(S) will have 2^n elements.
 *
 * Powersets of "abc": ['abc', 'ab', 'ac', 'a', 'bc', 'b', 'c', '']
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

// Method #1: DFS
const powerset_dfs = (str) => {
  let result = [];

  const dfs = (subset, depth) => {
    if (depth == str.length) {
      result.push(subset);
      return;
    }
    dfs(subset + str[depth], depth + 1);
    dfs(subset, depth + 1);
  };

  dfs("", 0);
  console.log("Result (dfs): ", result);
};

const str = "abc";
powerset_dfs(str);

// Method #2: RECURSIVE BACKTRACK
// Recursive Backtracking is a Depth-First-Search on a "decision tree"
const powerset_backtrack = (a) => {
  let result = [];

  const backtrack = (subset, depth) => {
    if (depth == a.length) {
      result.push([...subset]);
      return;
    }

    subset.push(a[depth]); // include item
    backtrack(subset, depth + 1); // backtrack
    subset.pop(); // not include item
    backtrack(subset, depth + 1); // backtrack
  };

  backtrack([], 0);
  console.log("Result (backtracking): ", result);
};

const a = [1, 2, 3];
powerset_backtrack(a);
