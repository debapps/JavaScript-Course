// This program demonstrates the conditional statements like: if-else-if-else and switch statements.

console.log("\n*********** Conditional Statements ***********\n");
let signal = "Green";

console.log("Signal - ", signal);
if (signal === "Red") {
  console.log("Stop Driving!");
} else if (signal === "Yellow") {
  console.log("Drive Slow!");
} else {
  console.log("Drive Car.");
}

const today = new Date().getDay();

switch (today) {
  case 0:
    console.log("Today is Sunday");
    break;
  case 1:
    console.log("Today is Monday");
    break;
  case 2:
    console.log("Today is Tuesday");
    break;
  case 3:
    console.log("Today is Wednesday");
    break;
  case 4:
    console.log("Today is Thursday");
    break;
  case 5:
    console.log("Today is Friday");
    break;
  case 6:
    console.log("Today is Saturday");
    break;

  default:
    console.log("Invalid Day");
    break;
}
