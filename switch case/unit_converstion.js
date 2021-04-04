const prompt = require("prompt-sync")();
let choices = prompt(
  "1:feet to inches 2:feet to meter 3:inch to feet 4:meter to feet"
);
switch (parseInt(choices)) {
  case 1:
    let value = prompt("valu in feet");
    console.log("value in inches " + value * 12);
    break;
  case 2:
 value = prompt("valu in feet");
    console.log("value in meter " + value / 3.281);
    break;
  case 3:
 value = prompt("valu in inches");
    console.log("value in feet " + value / 12);
    break;
  case 4:
 value = prompt("valu in meter");
    console.log("value in feet " + value * 3.281);
    break;
  default:
    console.log("invalid");
}
