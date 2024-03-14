/**
 * Math
 * Math.min(a, b, c, d, e) // any number of arguments
 */
Math.min(2, 5, 9);
Math.max(1, 10);
Math.floor(3 / 2);

/**
 * Infinity & -Infinity
 */
let a = Infinity;
let b = -Infinity;

/**
 * SET
 * Set is a collection of unique values (no duplicates).
 * Removing duplicates from an array by using the Set object.
 * ARRAY => SET & then SET => ARRAY
 */
// STEP 1: converting ARRAY to a SET
let set1 = new Set([1, 1, 2, 1, 4, 3, 4, 5]); // { 1, 2, 4, 3, 5 }
// Step 2: converting SET to an ARRAY
let arr = [...set1];

set1.add("a"); // Set(6) { 1, 2, 4, 3, 5, 'a' }
set1.add("b"); // Set(7) { 1, 2, 4, 3, 5, 'a', 'b' }
set1.delete("b"); // Set(6) { 1, 2, 4, 3, 5, 'a' }
set1.clear(); // clears all entries
set1.size; // size of set
console.log(set1); // Set(0) {}

// [IMP]
set1.add(1);
set1.delete(1);
set1.has(1);
set1.size;

/**
 * Arrays - SLIDING WINDOW
 * For O(n) time traversal
 * left, right => length of window: right - left + 1;
 * Use SETS or MAPS to track DUPLICATES
 */
// SHRINK window from LEFT
// EXPAND window from RIGHT

/**
 * RECURSION
 * Repeated work here, so not the best approach
 * Function call stack takes O(n) space
 */

/**
 * Memoisation
 * Return a memoised version of the function
 * This function will be able to retain the values when called the next time
 */
JSON.stringify(args);
