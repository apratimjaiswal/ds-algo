/**
 * Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].
 * You may return the answer in any order.

Example 1:
Input: n = 4, k = 2
Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
Explanation: There are 4 choose 2 = 6 total combinations.
Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

Example 2:
Input: n = 1, k = 1
Output: [[1]]
Explanation: There is 1 choose 1 = 1 total combination.
 */
function backtrack(n, k, start, subset, result) {
  if (subset.length == k) {
    console.log(subset);
    result.push([...subset]);
    return;
  }

  for (let i = start; i <= n; i++) {
    subset.push(i);
    backtrack(n, k, i + 1, subset, result);
    subset.pop();
  }
  return result;
}

function combinations(n, k) {
  let result = [];
  backtrack(n, k, 1, [], result);
  return result;
}

// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
let n = 4;
let k = 2;
combinations(n, k);

// ************************ Method #2 ************************
const combinations_2 = (a, k) => {
  let result = [];

  const backtrack = (start, subset) => {
    if (subset.length == k) {
      result.push([...subset]);
      result;
    }

    // "start" is important for COMBINATIONS
    for (let i = start; i < a.length; i++) {
      if (subset.includes(a[i])) continue;

      subset.push(a[i]);
      backtrack(i + 1, subset);
      subset.pop();
    }
    return result;
  };
  backtrack(0, []);
  console.log("Combinations: ", result);
};

let a_2 = [1, 2, 3, 4];
let k_2 = 2;
combinations_2(a_2, k_2);
