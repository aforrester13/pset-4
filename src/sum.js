hubconst readlineSync = require("readline-sync");

const lowerBound = Number(readlineSync.question("\nEnter first integer: "))
const upperBound = Number(readlineSync.question("Enter second integer: "))

let x = lowerBound
let y = upperBound


while (x < y) {
  if (x > y) {

    const lowerBound = Number(readlineSync.question("\nEnter first integer: "))
    const upperBound = Number(readlineSync.question("Enter second integer: "))

  } else if (x < Number.MIN_SAFE_INTEGER || y > Number.MAX_SAFE_INTEGER) {

    const lowerBound = Number(readlineSync.question("\nEnter first integer: "))
    const upperBound = Number(readlineSync.question("Enter second integer: "))

  } else if (x % 2 !== 0) {

    theSum = x

  } else if (x % 2 == 0) {

    theSum = lowerBound + x

  }
  x++
}
