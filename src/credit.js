const readlineSync = require("readline-sync");

let creditCard = 0;
let algorithm = 0;
let value = 0;
let value1 = 0;
let sum = 0;
let value2 = 0;
let value3 = 0;
let value4 = 0;

console.log()

do {
    creditCard = Number(readlineSync.question("Number: "))
} while (creditCard < 100000000000 || creditCard > 9999999999999999 || Number.isNaN(creditCard) || !Number.isInteger(creditCard))

while (creditCard > 0) {

    if (creditCard > 0) {
       value = Math.floor((creditCard % 100) / 10);
       creditCard = Math.floor(creditCard / 100);
       value4 = value * 2;

       if (value4 < 10) {
         console.log(value4);
         sum = sum + value4
       }

       if (value4 >= 10) {
         console.log(value4);
         value1 = value4 / 10;
         value2 = Math.floor(value1);
         value3 = value4 % 10;
         sum = sum + value2 + value3;
         console.log(value2);
         console.log(value3);
       }
    }
}
console.log("\n" + sum);
