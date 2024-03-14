/**
 * N-QUEEN PROBLEM
 * 
 * [RECURSIVE BACKTRACKING]
 * 
 * https://leetcode.com/problems/n-queens-ii/solutions/4726243/javascript-solution-for-n-queen-problem/
 * 
 * The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that 
 * no two queens attack each other. Given an integer n, return the number of distinct solutions to the n-queens puzzle.
 * 
 * Example 1:
 * Input: n = 4
Output: 2
Explanation: There are two distinct solutions to the 4-queens puzzle as shown.

Example 2:
Input: n = 1
Output: 1
 */

const nQueen = (size) => {
  let chessboard = new Array(size).fill().map((v) => new Array(size).fill("-"));
  let result = [];

  const isSafe = (R, C) => {
    // column
    for (let i = 0; i < size; i++) {
      if (chessboard[i][C] == "Q") return false;
    }
    // row
    for (let i = 0; i < size; i++) {
      if (chessboard[R][i] == "Q") return false;
    }

    // diagonal
    for (let i = R, j = C; i >= 0 && j >= 0; i--, j--) {
      if (chessboard[i][j] == "Q") return false;
    }
    for (let i = R, j = C; i < size && j < size; i++, j++) {
      if (chessboard[i][j] == "Q") return false;
    }

    // diagonal
    for (let i = R, j = C; i < size && j >= 0; i++, j--) {
      if (chessboard[i][j] == "Q") return false;
    }
    for (let i = R, j = C; i >= 0 && j < size; i--, j++) {
      if (chessboard[i][j] == "Q") return false;
    }
    return true;
  };

  const backtrack = (R) => {
    // base condition
    if (R == size) {
      result.push(chessboard);
      console.log(result);
      return;
    }

    for (let i = 0; i < size; i++) {
      if (isSafe(R, i)) {
        chessboard[R][i] = "Q";
        // console.log(chessboard);
        backtrack(R + 1);
        chessboard[R][i] = "-";
      }
    }
  };
  backtrack(0);
  return result.length;
};

let size = 4;
nQueen(size);
