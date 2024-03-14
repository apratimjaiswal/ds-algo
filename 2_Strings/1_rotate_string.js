// ****************** REVERSE A STRING ******************
String.prototype.reverse = function () {
  return this.split("").reverse().join("");
};
let str = "this_is_a_string";
console.log(str.reverse());

/**
 * ****************** ROTATE A STRING ******************
 * reverse(0, n); reverse(n + 1, end); reverse(0, end)
 */
String.prototype.rotate = function (index) {
  // split in 2 arrays
  //   let rotateIndex = this.length - index;
  let rotateIndex = index;
  let firstStr = this.substring(0, rotateIndex);
  let secondStr = this.substring(rotateIndex);

  // reverse both arrays
  firstStr.reverse();
  secondStr.reverse();

  // add the 2 arrays & reverse the output
  let finalStr = firstStr + secondStr;
  return finalStr.reverse();
};

// abcdef
// ab cdef
// ba fedc
// bafedc => cdefab

let str1 = "abcdef";
let index = 2;
console.log(`The rotated array by index ${index} is: ${str1.rotate(index)}`);

/**
 * ****************** REVERSE WORDS IN A STRING ******************
 */
function reverseWords(str) {
  let words = str.split(" ");
  let result = [];

  while (words.length > 0) {
    result.push(words.pop());
  }

  return result.join(" ");
}
let str2 = "This is a sample string";
console.log("Reverse words in a string: ", reverseWords(str2));
