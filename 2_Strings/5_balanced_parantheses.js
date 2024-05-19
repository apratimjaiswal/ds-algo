/**
 * Check if BALANCED PARANTHESES
 */

function check(a) {
  let stack = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] == "(") {
      stack.push(a[i]);
    } else {
      let topElem = stack.pop();
      if (topElem !== "(") {
        console.log("Not balanced");
        return;
      }
    }
  }

  if (stack.length == 0) console.log("Balanced");
  else console.log("Not balanced");
}

let a = "(()())";
check(a);
