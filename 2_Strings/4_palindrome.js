function checkPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    if (str[left++] !== str[right--]) {
      console.log("Not a palindrome.");
      return;
    }
  }
  console.log("It is a palindrome!");
  return;
}

let a = "admin";
let b = "abcba";
let c = "abccba";
checkPalindrome(a);
checkPalindrome(b);
checkPalindrome(c);
