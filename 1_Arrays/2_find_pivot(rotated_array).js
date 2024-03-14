/**
 * Ques: Searching for a PIVOT in a "ROTATED" & "SORTED" array
 *
 * [BINARY APPROACH]
 */
let rotatedArray = [6, 7, 8, 1, 2, 3, 4, 5];

function findPivot(arr) {
  let low = 0;
  let high = arr.length;
  let mid = 0;

  while (low <= high) {
    mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] > arr[mid + 1]) {
      console.log(`Pivot is at index: ${mid + 1}`);
      return;
    }
    if (arr[mid] < arr[mid - 1]) {
      console.log(`Pivot is at index: ${mid}`);
      return;
    }

    if (arr[mid] < arr[low]) high = mid;
    else low = mid;
  }
  console.log("Pivot NOT found");
}
findPivot(rotatedArray);
