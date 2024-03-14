// ITERATIVE APPROACH
// 0, 1, 1, 2, 3, 5, 8...
function fibonacci(n) {
  if (n <= 2) return n - 1;
  let first = 0;
  let second = 1;
  let sum = 0;

  while (n > 2) {
    sum = first + second;
    first = second;
    second = sum;
    n--;
  }
  return sum;
}
console.log(`Fibacco number is: ${fibonacci(5)}`);

/**
 * RECURSION APPROACH
 * Call stack takes space: O(n) space
 * BAD IMPLEMENTATION as it does a lot of repeated work (check the recursion tree).
 *
 * Since need memoization in a function, we will need to pass the MAP as function argument
 */
function fibonacciRecursion(n) {
  if (n <= 2) return n - 1;
  return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}
console.log(`Fibacco number (by recursion) is: ${fibonacciRecursion(5)}`);

// MEMOIZATION APPROACH
let map1 = new Map();
map1.set(1, 0);
map1.set(2, 1);
function fibonacciMemoization(n, map1) {
  if (map1.has(n)) {
    return map1.get(n);
  } else {
    map1.set(
      n,
      fibonacciMemoization(n - 1, map1) + fibonacciMemoization(n - 2, map1)
    );
    return map1.get(n);
  }
}
console.log(
  `Fibacco number (by memoization) is: ${fibonacciMemoization(5, map1)}`
);
