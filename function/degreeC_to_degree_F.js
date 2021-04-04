function calculateDegree(temperature) {
  result = (temperature * 9) / 5 + 32;
}

function calculateFahrenheit(temperature) {
  result = ((temperature - 32) * 5) / 9;
}
const prompt = require("prompt-sync")();
let choose = parseInt(prompt("enter 1:degree C or 2:degree F: "));
let temperature = parseInt(prompt("enter the temperature: "));
switch (choose) {
  case 1:
    if (32 < temperature < 212) calculateFahrenheit(temperature);
    break;
  case 2:
    if (0 < temperature < 100) calculateDegree(temperature);
    break;
  default:
    console.log("invalid");
    break;
}
