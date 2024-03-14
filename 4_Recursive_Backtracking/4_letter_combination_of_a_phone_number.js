/**
 * Given a string containing digits from 2-9 inclusive, return all possible letter combinations
 *  that the number could represent. Return the answer in any order.
A mapping of digits to letters (just like on the telephone buttons) is given below.
Note that one does not map to any letters.

Example 1:
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input: digits = ""
Output: []

Example 3:
Input: digits = "2"
Output: ["a","b","c"]
 */

function keyMap() {
  return {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
}

function backtrack(digits, map, current, subset, result) {
  if (subset.length == digits.length) {
    result.push([...subset].join(""));
    return;
  }
  // console.log(current);
  for (let i = 0; i < map[digits[current]].length; i++) {
    subset.push(map[digits[current]][i]);
    backtrack(digits, map, current + 1, subset, result);
    subset.pop();
  }
}

// ["23"]
var letterCombinations = function (digits) {
  if (!digits) return [];

  let m1 = keyMap();

  let result = [];
  backtrack(digits, m1, 0, [], result);
  console.log(result);
  return result;
};

let digits1 = "23";
let digits2 = "234";
letterCombinations(digits1);
letterCombinations(digits2);
