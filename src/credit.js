const readlineSync = require("readline-sync");

let creditCard = 0; 
let algorithm = 0;
let value = 0;
let value1 = 0;
let sum = 0;

console.log()

do {
    creditCard = Number(readlineSync.question("Number: ")
} while (creditCard < 100000000000 || creditCard > 9999999999999999 || Number.isNaN(creditCard) || !Number.isInteger(creditCard))

while (creditCard > 0) {

    if (creditCard > 0) {
       value = creditCard % 100
       value = value / 10 
       value = Math.floor(value)
       creditCard = Math.floor(creditCard)
       value = value * 2
       
          if (value > 10) {
            value1 = value % 10
            value = Math.floor(value)
          } else {
            value1 = 0;
          }
          
       sum = sum + value + value1
    }
    
    if (creditCard === 0) {
        break;
    }
}
    
