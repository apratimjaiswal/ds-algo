/**
 * {@link https://www.freecodecamp.org/news/understanding-memoize-in-javascript-51d07d19430e/}
 *
 * This memoise function takes in a function as an argument and
 * returns a MEMOISED VERSION of the input function.
 * Use this memoised function to memoise & getch memoised values
 */
function memoise(fn) {
  var cache = {};

  return function () {
    const key = JSON.stringify(arguments);

    if (cache[key]) {
      // fetching from cache
      return cache[key];
    } else {
      // not found in cache
      const result = fn.apply(null, arguments);
      cache[key] = result;
      return result;
    }
  };
}

// Function to be memoised
function add(a, b) {
  return a + b;
}
// If we want to memoise this "add" function. Get the memoised copy of this function
const memoisedAdd = memoise(add);

console.log(memoisedAdd(1, 2)); // No cache found
console.log(memoisedAdd(1, 2)); // Fetching from cache 3
