const readlineSync = require("readline-sync");

let x = -1;
do {
    x = Number(readlineSync.question("\nEnter first integer: "));
    y = Number(readlineSync.question("Enter second integer: "))
} while (x < y) {
    theSum = y + (x++)
    (x++)
}
