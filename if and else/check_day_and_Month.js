const prompt = require("prompt-sync")();
let day = prompt("enter the day");
let month = prompt("enter the month");
console.log(day, month);
if (
  (month.toLocaleLowerCase() == "march" && day > 20) ||
  (month.toLocaleLowerCase() == "april" && 1 < day < 32) ||
  (month.toLocaleLowerCase() == "may" && 1 < day < 32) ||
  (month.toLocaleLowerCase() == "june" && day<20)
) {
    console.log("true")
}else{
    console.log("false")
}
