let i = 1;
let storeNumber = new Array();
while (i <= 5) {
  let num = Math.floor(Math.random() * 1000);
  storeNumber.push(num);
  i++;
}
console.log(storeNumber);
console.log("maximum number: "+Math.max(...storeNumber));
console.log("minimum number: "+Math.min(...storeNumber));
