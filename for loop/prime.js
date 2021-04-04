const prompt = require("prompt-sync")();
let number = prompt("enter the num: ");
let flag = 1;
for (i = 2; i <= number / 2; i++) {
  let check = number % i;
  if (check == 0) flag = 0;
  break;
}
if (flag == 1) {
  console.log(number + " is prime");
} else {
  console.log(number + " not prime");
}
