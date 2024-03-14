/**
 * BUBBLE SORT
 *
 * Check adjacent numbers, swap continuously
 * (This way bubble up the highest value in each iteration)
 */

const bubbleSort = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  console.log(a);
};

let a = [4, 2, 1, 3, 5, 6];
bubbleSort(a);
