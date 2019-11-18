const readlineSync = require("readline-sync");

let theInteger = 0;
let x = 0;
let y = 0;
let result = 0;
console.log("");

do {
      theInteger = Number(readlineSync.question("Positive integer: "));
} while (theInteger <= 0 || theInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(theInteger) || !Number.isInteger(theInteger));

while (x < theInteger) {

    if (theInteger % x === 0) {
      result = x + ", ";
      y = result + theInteger / x + ", ";
    }
  x++
}
  console.log("\n" + x + y + "\n");
