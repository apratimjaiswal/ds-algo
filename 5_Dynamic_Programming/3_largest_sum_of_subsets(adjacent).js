/**
 * Give the largest sum of subset in a continuous mamner (Numbers should be ADJACENT)
 */
const largestSumOfSubsets_ADJACENT = (a) => {
  let globalSum = -Infinity;
  let currentSum = -Infinity;
  let start = 0;

  for (let i = 0; i < a.length; i++) {
    globalSum = Math.max(currentSum, globalSum);
    currentSum = currentSum + a[i];
    if (currentSum > globalSum) {
      globalSum = currentSum;
    } else {
      start = i;
      currentSum = a[i];
    }
  }

  console.log("Max sum: ", globalSum);
};

let a = [-4, -2, 5, 1, -2, 3, 6, 5, -1];
largestSumOfSubsets_ADJACENT(a);
