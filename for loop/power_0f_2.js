const prompt = require("prompt-sync")();
let number = prompt("enter the num: ");
console.log(2 ** number);
for (i = 1; i <= 2 ** number; i++) {
  let result = 2 ** i;
  console.log(result);
  if (result == 2 ** number) {
    break;
  }
}
