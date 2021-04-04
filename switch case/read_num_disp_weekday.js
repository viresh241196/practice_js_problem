const prompt = require("prompt-sync")();
let number = prompt("enter the num");
let num = parseInt(number); 
switch (num) {
  case 0: {
    console.log("SUNDAY");
    break;
  }
  case 1:{
    console.log("Monday");
    break;
  }
  case 2:{
    console.log("Tuesday");
    break;
  }
  case 3:{
    console.log("Wednesday");
    break;
  }
  case 4:{
    console.log("Friday");
    break;
  }
  case 4:{
    console.log("saturday");
    break;
  }
}
