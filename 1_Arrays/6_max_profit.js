/**
 * Ques: Given an array, we have to find the MAX PROFIT using minimum Buy value &
 * maximum Sell value -> So that we get max profit
 */
function maxProfit(a) {
  let currentSmallest = a[0];
  let currentProfit = 0;
  let maxProfit = -Infinity;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < currentSmallest) currentSmallest = a[i];
    currentProfit = a[i] - currentSmallest;
    maxProfit = Math.max(maxProfit, currentProfit);
  }
  console.log("Max profit is: ", maxProfit);
}

let a = [8, 9, 5, 6, 12, 10, 11];
maxProfit(a);
