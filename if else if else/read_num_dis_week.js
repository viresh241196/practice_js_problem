const prompt = require("prompt-sync")();
let num = prompt("enter the number");
if (num == 0) {
  console.log("SUNDAY");
} else if (num == 1) {
  console.log("MONDAY");
} else if (num == 2) {
  console.log("TUESDAY");
} else if (num == 3) {
  console.log("WEDNESDAY");
} else if (num == 4) {
  console.log("THURSDAY");
} else if (num == 5) {
  console.log("FRIDAY");
} else if (num == 6) {
  console.log("SATURDAY");
} else {
  console.log("invalid");
}
