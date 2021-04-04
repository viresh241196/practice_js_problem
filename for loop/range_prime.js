const prompt = require("prompt-sync")();
let start = parseInt(prompt("enter the num: "));
let end = parseInt(prompt("enter the num: "));
for (j = start; j <= end; j++) {
  let flag = 1;
  for (i = 2; i < j; i++) {
    let check = j % i;
    if (check == 0) {
      flag = 0;
      break;
    }
  }
  if (flag == 1) {
    console.log(j);
  }
}

