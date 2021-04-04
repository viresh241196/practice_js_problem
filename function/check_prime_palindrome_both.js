function isPrime(number) {
  let flag = 1;
  for (i = 2; i <= number / 2; i++) {
    let check = number % i;
    if (check == 0) {
      flag = 0;
      return false;
    }
  }
  return true;
}
function isPalindrome(number) {
  if (number.toString().split("").reverse().join("") === number.toString()) {
    return true;
  }
  return false;
}

const prompt = require("prompt-sync")();
let number = parseInt(prompt("enter the number "));
if (isPrime(number)) {
  if (isPalindrome(number)) {
    console.log(number + " is palindrome and prime");
  } else if (!isPalindrome(number)) {
    console.log(number + " is only prime number");
  }
} else if (isPalindrome(number)) {
  console.log(number + " is only a palindrome number");
} else {
  console.log(number + " is neither prime nor palindrome");
}
