/**
 * COMBINATION SUM
 * https://leetcode.com/studyplan/top-interview-150/
 * 
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations
 *  of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
frequency of at least one of the chosen numbers is different. 

Example 1:
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.

Example 2:
Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]

Example 3:
Input: candidates = [2], target = 1
Output: []

 */

Array.prototype.arraySum = function () {
  return this.reduce((curr, sum) => curr + sum, 0);
};
function backtrack(a, target, currentSubset, currentSum, result, resultSet) {
  if (currentSum == target) {
    let tempCurrentSubset = currentSubset;
    let num = tempCurrentSubset.sort().join("");
    console.log(num);
    if (!resultSet.has(num)) {
      resultSet.add(num);
      result.push([...currentSubset]);
    }
    return;
  }

  for (let i = 0; i < a.length; i++) {
    currentSubset.push(a[i]);

    currentSum = currentSubset.arraySum();

    if (currentSum > target) {
      currentSubset.pop();
      continue;
    }

    backtrack(a, target, currentSubset, currentSum, result, resultSet);
    currentSubset.pop();
  }
}

function combinationSum(a, target) {
  let result = [];
  let resultSet = new Set();
  backtrack(a, target, [], 0, result, resultSet);
  console.log(result);
}

let a = [2, 3, 6, 7];
let target = 7;
combinationSum(a, target);
