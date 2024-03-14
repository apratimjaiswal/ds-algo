/**
 * Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:


Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 */

// ********************************** Method #1 ********************************** //
/** Recursive solution */
const pascalTriangles_recursive = (rowNum) => {
  const printPascal = (n) => {
    if (n == 2) return [1, 1];

    let row = new Array(n);
    row[0] = 1;
    row[row.length - 1] = 1;

    let previousRow = printPascal(n - 1);

    for (let i = 1; i < n - 1; i++) {
      row[i] = previousRow[i] + previousRow[i - 1];
    }
    return row;
  };

  let result = printPascal(rowNum + 1); // size
  console.log(result);
};

let rowNum = 1;
// pascalTriangles_recursive(rowNum);
pascalTriangles_recursive(1);
pascalTriangles_recursive(2);
pascalTriangles_recursive(3);
pascalTriangles_recursive(4);
pascalTriangles_recursive(5);

// ********************************** Method #2 ********************************** //
const pascalTriangle = (rowNum) => {
  let pascalsTriangles = new Array(rowNum);

  for (let i = 0; i < rowNum; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;

    for (let j = 1; j < row.length - 1; j++) {
      let rowAbove = pascalsTriangles[i - 1];
      row[j] = parseInt(rowAbove[j]) + parseInt(rowAbove[j - 1]);
    }
    pascalsTriangles[i] = row;
  }
  return pascalsTriangles;
};

let row = 6;
console.log(pascalTriangle(row));
