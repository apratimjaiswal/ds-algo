/**
 * All possible "Permutations" (order matters)
 * Permutations of "ABC": ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"]
 *
 * [RECURSIVE BACKTRACKING]
 */
// "Array" subset
const permutations = (a) => {
  let result = [];

  const backtrack = (subset) => {
    if (subset.length == a.length) {
      result.push([...subset]);
      return;
    }

    for (let i = 0; i < a.length; i++) {
      if (subset.includes(a[i])) continue;

      subset.push(a[i]);
      backtrack(subset);
      subset.pop();
    }
  };
  backtrack([]);
  console.log("Permuations: ", result);
};

// "Set" implementation
function backtrack(a, visitedSet, result) {
  // Base condition
  if (visitedSet.size == a.length) {
    result.push([...visitedSet]);
  }

  for (let i = 0; i < a.length; i++) {
    if (visitedSet.has(a[i])) continue; // Skip if we get the same element

    visitedSet.add(a[i]); // Add the new element
    backtrack(a, visitedSet, result); // Go back to try other element
    visitedSet.delete(a[i]); // Remove the element
  }
}

let result = [];
let a = [1, 2, 3];
let visited = new Set();
backtrack(a, visited, result);
console.log("All possible permutations are: ", result);

permutations(a);
