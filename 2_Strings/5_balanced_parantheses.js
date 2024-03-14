/**
 * Check if BALANCED PARANTHESES
 */

const checkBalancedParanthese = (a) => {
  let stack = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] == "(") {
      // "("
      stack.push(a[i]);
    } else {
      // ")"
      if (stack[stack.length - 1] !== "(") {
        return false;
      }
      stack.pop();
    }
  }
  if (stack.length == 0) return true;
  return false;
};

let a = "(()())";
checkBalancedParanthese(a)
  ? console.log("Balanced parantheses")
  : console.log("Not balanced parantheses");
