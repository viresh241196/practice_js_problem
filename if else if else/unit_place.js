const prompt = require("prompt-sync")();
let num = prompt("enter the number");
if (num == 1) {
  console.log("unit");
} else if (num == 10) {
  console.log("tens");
} else if (num == 100) {
  console.log("hundred");
} else if (num == 1000) {
  console.log("thousand");
} else if (num == 10000) {
  console.log("lakhs");
} else {
  console.log("invalid");
}
