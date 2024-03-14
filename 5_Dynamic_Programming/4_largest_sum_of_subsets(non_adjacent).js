/**
 * Give the largest sum of subset in a continuous mamner (Numbers should be NON_ADJACENT)
 */

const largestSumOfSubsets_Non_Adjacent_Numbers = (a) => {
  let currentSum = 0;
  let globalSum = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) continue;
    currentSum = currentSum + a[i];
    if (currentSum > globalSum) {
      globalSum = currentSum;
    } else {
      currentSum = currentSum - a[i];
    }
  }
  console.log("Max sum: ", globalSum);
};

let a = [-4, -2, 5, 1, -2, 3, 6, 5, -1];
largestSumOfSubsets_Non_Adjacent_Numbers(a);
