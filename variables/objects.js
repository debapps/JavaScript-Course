// This program demonstrates the objects in JavaScript.
// Object is a non-premitive data type in JavaScript which holds key-value pairs.
// It encapsulates different premitive data variables.

console.log("\n******** Non-premitive: Objects ********\n");

const myCar = {
  make: "Toyota",
  model: "Camry LE",
  year: 2012,
};

// Show Car.
console.log(`My Car:
Make => ${myCar["make"]}
Model => ${myCar["model"]}
Year => ${myCar["year"]}`);

// Add new data member. (Object memory address is stored in the const variable.)
myCar["color"] = "White";

// Show Car.
console.log(`
My Car:
Make => ${myCar.make}
Model => ${myCar.model}
Year => ${myCar.year}
Color => ${myCar.color}`);
