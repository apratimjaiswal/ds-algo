/**
 * Ques: Move all 0's to LEFT side
 *
 * [POINTER TECHNIQUE]
 * Time O(n) & Space O(1)
 */
function moveToLeftSide(a) {
  let zeroCounter = a.length - 1;

  for (let i = a.length - 1; i >= 0; i--) {
    if (a[i] !== 0 && i < zeroCounter) {
      let temp = a[i];
      a[i] = a[zeroCounter];
      a[zeroCounter] = temp;

      zeroCounter--;
    }
  }
  console.log(a);
}

let a = [2, 4, 0, 1, 0, 6, 0];
moveToLeftSide(a);
