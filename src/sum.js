const readlineSync = require("readline-sync");

let x = 0;
let y = 0;
let z = 0;

const lowerBound = readlineSync.question("\nLowerbound: ")
const upperBound = readlineSync.question("Upperbound: ")

do {
    x = readlineSync.question("Lowerbound: ")
    y = readlineSync.question("Upperbound: ")
} while (x > upperBound || x < Number.MIN_SAFE_INTEGER || x > Number.MAX_SAFE_INTEGER || y < Number.MIN_SAFE_INTEGER || y > Number.MAX_SAFE_INTEGER);

while (x < y) {

    if (x % 2 === 0) {
      z = x + x
    } else {

    }
  x++
}

console.log("\n" + z)
