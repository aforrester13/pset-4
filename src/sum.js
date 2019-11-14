const readlineSync = require("readline-sync");

let x = 0;
let sum = 0;

do {
     lowerBound = Number(readlineSync.question("Lowerbound: "))
     upperBound = Number(readlineSync.question("Upperbound: "))
} while (lowerBound < Number.MIN_SAFE_INTEGER || lowerBound > Number.MAX_SAFE_INTEGER || upperBound < Number.MIN_SAFE_INTEGER || upperBound > Number.MAX_SAFE_INTEGER || lowerBound >= upperBound || !Number.isNaN(lowerBound) || !Number.isNaN(upperBound));


for (let x = lowerBound; x <= upperBound; x++) {
      if (x % 2 === 0) {
          for (x = lowerBound; x <= upperBound; x+=2) {
            sum = x + sum;
          }
      }

      if (x % 2 !== 0) {
          for (x = lowerBound + 1; x <= upperBound; x+=2) {
            sum = x + sum;
          }
      }
}


console.log("\n" + sum + ".")
