/**
 * Smallest COMMON value (in 3 arrays)
 * 3 "SORTED" arrays
 * Take pointer indexes to each of the arrays & if elements not equal => move smallest of three values
 *
 * [FIND BY COMPARISON - POINTER TECHNIQUE]
 */

function smallestCOMMONValue(a1, a2, a3) {
  let i = 0;
  let j = 0;
  let k = 0;
  let smallest = Infinity;

  while (i < a1.length && j < a2.length && k < a3.length) {
    if (a1[i] == a2[j] && a1[i] == a3[k]) {
      smallest = Math.min(a1[i], smallest);
    }

    if (a1[i] <= a2[j] && a1[i] <= a3[k]) i++;
    else if (a2[j] <= a1[i] && a2[j] <= a3[k]) j++;
    else k++;
  }

  smallest == Infinity
    ? console.log("Smallest common value NOT found")
    : console.log("Smallest common value is: ", smallest);
}

let a1 = [1, 5, 9];
let a2 = [2, 3, 4, 5, 6, 7];
let a3 = [2, 3, 5, 6];

smallestCOMMONValue(a1, a2, a3);
