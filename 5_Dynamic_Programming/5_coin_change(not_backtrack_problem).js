/**
 * [Coin Change Problem]
 *
 * Find number of different ways to make up a specific amount of money, given a list of possible coin denominations.
 *
 * The Coin Change Problem is all about finding the number of ways to make changes for a particular
 *  amount of cents, given a list of coin denominations. For instance, if we have denominations of
 *  1, 2, and 5 cents and we need to make 10 cents, there are several ways to do this, such as
 * ten 1-cent coins, five 2-cent coins, two 5-cent coins, etc
 */

//           []
//       1    5    10
// 1,5,10    1,5,10    1,5,10

// !!!!!!!!!!!!!!!! NOOOOOO - THIS IS NOT A DECISION TREE !!!!!!!!!!!!!!!!

// !!!!!!!!!!!!!!!! WRONG ANSWER !!!!!!!!!!!!!!!!
const coinChange_WRONG = (a, target) => {
  let result = [];
  const backtrack = (subset, result) => {
    if (subset.length > a.length) {
      let sum = [...subset].reduce((curr, res) => curr + res, 0);
      // console.log(subset, sum);
      if (sum == target) {
        result.push([...subset]);
        console.log("Result: ", result);
      }
      return;
    }
    for (let i = 0; i < a.length; i++) {
      subset.push(a[i]);
      backtrack(subset, result);
      subset.pop();
    }
  };
  backtrack([], result);
};

let a = [1, 5, 10];
let target = 10;
// coinChange_WRONG(a, target);
