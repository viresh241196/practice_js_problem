function checkPalindrome(number) {
  if (number.split("").reverse().join("")===number) {
    console.log("is palindrome number");
  } else {
    console.log("is not a palindrome");
  }
}

const prompt = require("prompt-sync")();
let number = prompt("enter the number ");
checkPalindrome(number);
