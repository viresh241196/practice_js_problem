const prompt = require("prompt-sync")();
let number = prompt("enter the num: ");
let num = parseInt(number); 
switch (num) {
  case 1:
    console.log("unit");
    break;
  case 10:
    console.log("ten");
    break;
  case 100:
    console.log("hundred");
    break;
  case 1000:
    console.log("thousand");
    break;
  case 100000:
    console.log("lakhs");
    break;
  default:
    console.log("invalid");
    break;
}

