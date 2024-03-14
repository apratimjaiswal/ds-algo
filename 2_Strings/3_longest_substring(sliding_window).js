/**
 * [SLIDING WINDOW]
 *
 * Longest Substring (without repeating characters)
 *
 * Ques: Find the "LENGTH" of the longest string of characters in a provided string that
 * does not contain repeating characters
 *
 * Window START & Window END
 * Current window size: "right - left + 1"
 *
 * Time O(n) & Space O(n)
 *
 * Shrinking our sliding window (from the left), until we no longer have duplicates!
 */

// With MAPS - Time O(n) & Space O(n)
function longestSubstring_MAPS(str) {
  let left = 0;
  let maxLength = 0;
  let lastScene = -1;

  let map1 = new Map();

  for (let right = 0; right < str.length; right++) {
    if (map1.has(str[right])) {
      // Update left position
      lastScene = map1.get(str[right]);
      left = Math.max(left, lastScene + 1);
    }
    // Update maxLength always
    map1.set(str[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  console.log("Length of longest substring (with MAPS): ", maxLength);
  return maxLength;
}

let a = "ABCDABCEF";
let b = "ABDEFGABEF";
let c = "bbbbb";
longestSubstring_MAPS(b);
// longestSubstring_MAPS(b);
// longestSubstring_MAPS(c);

// With SETS
// #TODO: IMPORTANT
function longestSubstring_SETS(a) {
  let set1 = new Set();

  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < a.length; right++) {
    // [IMP]
    while (set1.has(a[right])) {
      set1.delete(a[left]);
      left++;
    }
    set1.add(a[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  console.log("Length of longest substring (with SETS): ", maxLength);
}
// let a = "ABCDABCEF";
// let b = "ABDEFGABEF";
// let c = "bbbbb";
longestSubstring_SETS(b);

// Time O(n2) & Space O(n)
function longestSubstring_BRUTE_FORCE(a) {
  let map1 = new Map();
  let maxLength = 1;

  for (let i = 0; i < a.length; i++) {
    map1.clear();
    map1.set(a[i], i);
    for (let j = i + 1; j < a.length; j++) {
      if (map1.has(a[j])) {
        map1.set(a[j], j);
        break;
      }
      map1.set(a[j], j);
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  console.log("Length of longest substring (by brute force) is: ", maxLength);
}
// let a = "ABCDABCEF";
// let b = "ABDEFGABEF";
// let c = "bbbbb";
longestSubstring_BRUTE_FORCE(b);
