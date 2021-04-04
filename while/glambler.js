let results = 100;
let number_of_bet = 0;
let number_of_time_won = 0;
while (results != 0 && results != 200) {
  let outcome = Math.floor(Math.random() * 10) % 2;
  number_of_bet++;
  if (outcome == 0) {
    results -= 1;
  } else if (outcome === 1) {
    results += 1;
    number_of_time_won++;
    console.log(results);
  }
}
if (results == 0) {
  console.log("glabler loose");
} else {
  console.log("glambler won");
}
console.log(
  "number of bets" +
    number_of_bet +
    " number time glambler won " +
    number_of_time_won
);
