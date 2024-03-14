/**
 * SELECTION SORT
 *
 * Finding/Selecting the smallest after every iteration
 * (Repetedly finding the minimum element)
 */

const selectionSort = (a) => {
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp = a[j];
        a[j] = a[i];
        a[i] = temp;
      }
    }
  }
  console.log(a);
};

let a = [4, 2, 1, 3, 5, 6];
selectionSort(a);
