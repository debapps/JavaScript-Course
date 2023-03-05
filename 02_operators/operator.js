let a = 15;
let b = 2;

console.log("\n********** Arithmathic Operators **********");
console.log(`\na - ${a} | b - ${b}`);
console.log("a + b:", a + b);
console.log("a - b:", a - b);
console.log("a * b:", a * b);
console.log("a / b:", a / b);
console.log("a ** b:", a ** b);
console.log("a % b:", a % b);

console.log("\n********** Increment/Decrement Operators **********");
console.log(`\na - ${a}`);
console.log("a++: ", a++);
console.log(`\na - ${a}`);
console.log("++a: ", ++a);
console.log(`\na - ${a}`);
console.log("a--: ", a--);
console.log(`\na - ${a}`);
console.log("--a: ", --a);

console.log("\n********** Assignment Operators **********");
console.log(`\na - ${a} | b - ${b}`);
a += b;
console.log("a += b:", a);
a -= b;
console.log("a -= b:", a);
a *= b;
console.log("a *= b:", a);
a /= b;
console.log("a /= b:", a);
a **= b;
console.log("a **= b:", a);
a %= b;
console.log("a %= b:", a);
a = b;
console.log("a = b:", a);

console.log("\n********** Comparision Operators **********");
a = 15;
b = "15";
console.log(`\na - ${a} | b - ${b}`);
console.log("a == b", a == b);
console.log("a === b", a === b);
console.log("a != b", a != b);
console.log("a !== b", a !== b);

let c = 10;
let d = 9.2;

console.log(`\nc - ${c} | d - ${d}`);
console.log("c > d", c > d);
console.log("c >= d", c >= d);
console.log("c < d", c < d);
console.log("c <= d", c <= d);

console.log("\n********** Logical Operators **********");
let result = a == b && a != 0;
console.log("a == b && a != 0:", result);
result = a == b || a != 0;
console.log("a == b || a != 0:", result);
console.log("!true", !true);

console.log("\n********** Trinary Operators **********");
let isWorkDone = true;
let action = isWorkDone ? "Let's Party!" : "Back to Work.";
console.log(action);

console.log("\n********** Type Operators **********");
console.log("typeof isWorkDone = ", typeof isWorkDone);

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

let myCar = new Car("Toyota", "Camry LE", 2012);

console.log("myCar instanceof Car? ", myCar instanceof Car);
console.log("myCar instanceof Object? ", myCar instanceof Object);
console.log("\n*******************************************************");
