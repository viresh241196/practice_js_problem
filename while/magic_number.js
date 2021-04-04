const prompt = require("prompt-sync")();
let num = prompt("enter the num between 1 to 100");
let start = 0;
let end = 10;
let result = end / 2;
while (result != num) {
  let ans = prompt("number less or greater than " + result + " enter l or g:");
  console.log(ans);
  if (ans === "l") {
    end = result;
    result = Math.round((end + start) / 2);
  } else if (ans === "g") {
    start = start + result;
    console.log(start);
    result = Math.round((end + start) / 2);
  } else {
    console.log("invalid");
  }
}
console.log("your number is " + result);
