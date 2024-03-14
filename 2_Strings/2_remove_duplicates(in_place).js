/**
 * ****************** REMOVE DUPLICATES FROM A STRING (IN PLACE) ******************
 *
 * One method for removing duplicates from an array is to use the "Set" object.
 * (A Set is a collection of unique values that do not allow for duplicates)
 * We can use this to our advantage by converting an array to a Set and then back to an array
 */
function removeDuplicates(str) {
  let inputArr = str.split("");
  // converting ARRAY to a SET
  let set1 = new Set(inputArr);

  // converting SET to an ARRAY
  let arr = [...set1];

  console.log(str, arr.join(""));
  return arr.join("");
}

let a = "adeabbcc";
removeDuplicates(a);
