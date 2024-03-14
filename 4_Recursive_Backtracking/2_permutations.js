/**
 * All possible "Permutations"
 * [RECURSIVE BACKTRACKING]
 */
function backtrack(a, visitedSet, result) {
  // Base condition
  if (visitedSet.size == a.length) {
    result.push([...visitedSet]);
  }

  for (let i = 0; i < a.length; i++) {
    // Skip if we get the same element
    if (visitedSet.has(a[i])) continue;

    // Add the new element
    visitedSet.add(a[i]);

    // Go back to try other element
    backtrack(a, visitedSet, result);

    // Remove the element
    visitedSet.delete(a[i]);
  }
}

let result = [];
let a = [1, 2, 3];
let visited = new Set();
backtrack(a, visited, result);
console.log("All possible permutations are: ", result);

// Method #2
// Find permutations

function backtrack1(a, subset, result) {
  if (subset.length == a.length) {
    result.push([...subset]);
    return;
  }

  for (let i = 0; i < a.length; i++) {
    if (subset.includes(a[i])) continue;

    subset.push(a[i]);
    backtrack1(a, subset, result);
    subset.pop();
  }
}

let result1 = [];
backtrack1(a, [], result1);
console.log("Permutations are: ", result1);
