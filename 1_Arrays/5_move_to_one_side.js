/**
 * Ques: Move all 0's to LEFT side
 *
 * [POINTER TECHNIQUE]
 * Time O(n) & Space O(1)
 */
function moveZerosToLeft(a) {
  let write = a.length - 1;

  for (let read = a.length - 1; read >= 0; read--) {
    if (a[read] !== 0) {
      // if non-zero, then swap 'read' & 'write'
      let temp = a[read];
      a[read] = a[write];
      a[write] = temp;

      write--; // decrement write
    }
  }
  console.log("Result: ", a);
}

moveZerosToLeft([2, 4, 0, 1, 0, 6, 0, 9, 0]);
moveZerosToLeft([2, 4, 0, 1, 0, 6, 0]);
