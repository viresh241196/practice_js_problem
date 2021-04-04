let headCount = 0;
let tailCount = 0;
while (headCount < 11 && tailCount < 11) {
  let num = Math.floor(Math.random() * 10) % 2;
  if (num == 1) {
    console.log("Head");
    headCount++;
  } else {
    console.log("Tail");
    tailCount++;
  }
}
console.log("head count" + headCount + "  " + "tail count" + tailCount);
