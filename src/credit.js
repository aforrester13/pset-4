const readlineSync = require("readline-sync");

let creditCard = 0;
let algorithm = 0;
let value = 0;
let value1 = 0;
let sum = 0;
let value2 = 0;
let value3 = 0;

console.log()

do {
    creditCard = Number(readlineSync.question("Number: "))
} while (creditCard < 100000000000 || creditCard > 9999999999999999 || Number.isNaN(creditCard) || !Number.isInteger(creditCard))

while (creditCard > 0) {

    if (creditCard > 0) {
       value = Math.floor((creditCard % 100) / 10);
       creditCard = Math.floor(creditCard / 100);
       value = value * 2;

        if (value >= 10) {
         value1 = value / 10;
         value2 = Math.floor(value1);
         value3 = value % 10;
         sum = sum + value2 + value3
        }

       sum = sum + value
    }
}
console.log("\n" + sum);
