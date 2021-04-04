const prompt = require("prompt-sync")();
let number = prompt("enter the num: ");
console.log(2 ** number);
let i = 1;
while (i != 2 ** number) {
  console.log(2 ** i);
  i++;
}
