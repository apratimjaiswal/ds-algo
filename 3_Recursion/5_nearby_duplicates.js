/**
 * Nearby duplicates
 *
 * Remove the nearby duplicates
 * Eg. "myllccoo" => "mylco"
 */

const dupString = (a) => {
  if (a.length == 1) return a;

  if (a[0] !== a[1]) {
    return a[0] + dupString(a.slice(1));
  } else {
    return dupString(a.slice(1));
  }
};

let str = "myllccoo";
console.log(dupString(str));
