const prompt = require("prompt-sync")();
let number = prompt("enter the num: ");
let result = 1;
for (i = 1; i <= number; i++) {
  result = result * i;
}
console.log(result);
