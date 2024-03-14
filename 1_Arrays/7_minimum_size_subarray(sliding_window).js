/**
 * Ques: Minimum Size Subarray Sum
 *
 * Given an array of positive integers nums and a positive integer target, return the minimal length of a
 * (CONTINUOUS) subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead
 *
 * [SLIDING WINDOW]
 * EXPAND the window (from right) when target sum NOT reached.
 * SHRINK the window (from left) when target sum NOT reached.
 */

function minimumSizeSubarray_BRUTE_FORCE(target, a) {
  let minLength = Infinity; // length of array
  let currentSum = 0;

  for (let i = 0; i < a.length; i++) {
    currentSum = a[i];
    if (currentSum >= target) {
      console.log("Minimum Size of Subarray (BRUTE FORCE): ", 1);
      return 1;
    }
    for (let j = i + 1; j < a.length; j++) {
      currentSum = currentSum + a[j];
      if (currentSum >= target) {
        minLength = Math.min(minLength, j - i + 1);
      }
    }
  }
  minLength = minLength == Infinity ? 0 : minLength;
  console.log("Minimum Size of Subarray (Brute force): ", minLength);
  return minLength;
}
minimumSizeSubarray_BRUTE_FORCE(7, [2, 3, 1, 2, 4, 3]); // 2
minimumSizeSubarray_BRUTE_FORCE(4, [1, 4, 4]); // 1
minimumSizeSubarray_BRUTE_FORCE(11, [1, 1, 1, 1, 1, 1, 1, 1]); // 0
minimumSizeSubarray_BRUTE_FORCE(5, [2, 3, 1, 1, 1, 1, 1]); // 2

function minimumSizeSubarray_SLIDING_WINDOW(target, a) {
  let left = 0;
  let right = 0;
  let currentSum = 0;
  let minLength = Infinity;

  while (right < a.length) {
    currentSum = currentSum + a[right];

    if (currentSum >= target) {
      while (currentSum >= target) {
        minLength = Math.min(minLength, right - left + 1);
        // Shrink window from left
        currentSum = currentSum - a[left];
        left++;
      }
      right++;
    } else {
      // Expand window from right
      right++;
    }
  }
  minLength = minLength === Infinity ? 0 : minLength;
  console.log("Minimum Size of Subarray (SLIDING WINDOW): ", minLength);
  return minLength;
}

minimumSizeSubarray_SLIDING_WINDOW(7, [2, 3, 1, 2, 4, 3]); // 2
minimumSizeSubarray_SLIDING_WINDOW(4, [1, 4, 4]); // 1
minimumSizeSubarray_SLIDING_WINDOW(11, [1, 1, 1, 1, 1, 1, 1, 1]); // 0
minimumSizeSubarray_SLIDING_WINDOW(5, [2, 3, 1, 1, 1, 1, 1]); // 2
