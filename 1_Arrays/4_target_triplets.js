/**
 * Ques: Given an array & given a sum -
 * we have to find out combination of which of the elements gives us the targeted sum
 *
 * [TWO POINTER TECHNIQUE]
 */
function targetTriplets(a, target) {
  // STEP 1: Sort the array first
  a.sort();

  // STEP 2
  let i = 0;
  let left = 1;
  let right = a.length - 1;
  let sum = a[0] + a[left] + a[right];

  for (let i = 0; i < a.length; i++) {
    left = i + 1;

    while (left < right && right > 0) {
      sum = a[i] + a[left] + a[right];

      if (sum == target) {
        console.log("Triple found: ", a[i], a[left], a[right]);
        return;
      }

      if (sum > target) right--;
      else left++;
    }
  }
}

// let arr = [1, 2, 3, 4, 5, 6];
let arr = [3, 4, 5, 2, 6, 1];
let target = 10; // output: 2, 3, 6

targetTriplets(arr, target);
