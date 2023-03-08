// This program demonstrates different types of loops in Javascript.
console.log("\n********** Loop Statement **********\n");

// For loop: Calculate sum of first 10 positive integers.

let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
}

console.log("The sum of first 10 positive integers: ", sum);

// For in loop: Show the values in an object.

const myCar = {
  make: "Toyota",
  model: "Camry LE",
  year: 2012,
};

let carDetails = "";

for (let key in myCar) {
  carDetails += myCar[key] + " ";
}

console.log("\nMy Car Details: ", carDetails);

// For of loop: Show the letters of an string (Used to traverse/iterate an iterable).

console.log("\nFor of loop: Show the letters of an string.");
const message = "JavaScript is everywhere!";

for (let letter of message) {
  console.log(letter);
}

// While loop: Show the positive even numbers between 0 - 10.
// The condition is checked first, if it is true, the loop body executed.

console.log("\nThe positive even numbers between 0 - 10:");
let i = 0;
while (i <= 10) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// Do-While loop: Show the positive odd numbers between 0 - 10.
// The loop body exected first, then condition is checked. If the condition is true, the body executed again.

console.log("\nThe positive odd numbers between 0 - 10:");
let j = 0;
do {
  if (j % 2 !== 0) {
    console.log(j);
  }
  j++;
} while (j <= 10);
