/**
 * NORMAL SEARCH:
 * Time O(n)
 * Space: O(1)
 */
function normalSearch(arr, element) {
  console.log(arr);
  for (let i = 0; i < a.length; i++) {
    if (arr[i] === element) {
      console.log(`Nornal search - Number ${element} found at index ${i + 1}`);
      return;
    }
  }
  console.log("Nornal search - Not found");
}
let a = [1, 3, 5, 2, 9, 8];
normalSearch(a, 5);

/**
 * BINARY SEARCH (Array has to be sorted)
 * Time O(log n)
 * Space O(1) [Iterative approach]
 * Space O(log n) call stack space [Recursive approach]
 *
 * Ques: Search a number in a SORTED array, using "binary approach".
 */
let arr = [1, 2, 3, 4, 5];
function binarySearch(arr, x) {
  console.log(arr);

  let low = 0;
  let high = arr.length - 1;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2); // #TODO: IMP

    if (arr[mid] == x) {
      console.log(`Binary search - Number ${x} found at index ${mid}`);
      return;
    }

    if (x > arr[mid]) low = mid;
    else high = mid;
  }
  console.log("Binary search - Not found");
}
binarySearch(arr, 2);
