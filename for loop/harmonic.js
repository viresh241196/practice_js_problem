const prompt = require("prompt-sync")();
let number = prompt("enter the num: ");
let result = 1;
for (i = 2; i <= number; i++) {
  result = result + 1 / i;
}
console.log(result);
