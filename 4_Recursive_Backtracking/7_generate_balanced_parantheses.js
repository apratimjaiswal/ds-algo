/**
 * Generate BALANCED PARANTHESES
 * 
 * Recursive backtracking
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]
 */
const checkBalancedParanthese = (a) => {
  let stack = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "(") {
      // "("
      stack.push(a[i]);
    } else {
      // ")"
      if (stack[stack.length - 1] !== "(") {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.length == 0) return true;
  return false;
};

const generateParantheses = (n) => {
  let treeDepth = 2 * n;

  let result = [];
  const backtrack = (depth, subset, result) => {
    // Base condition
    if (subset.length == treeDepth) {
      result.push([...subset]);
      return;
    }

    subset.push("(");
    backtrack(depth + 1, subset, result);
    subset.pop();

    subset.push(")");
    backtrack(depth + 1, subset, result);
    subset.pop();
  };
  backtrack(0, [], result);
  // console.log(result);

  result = result.filter(checkBalancedParanthese).map((a) => a.join(""));
  console.log(result);
  return result;
};

let n = 3;
generateParantheses(n);
