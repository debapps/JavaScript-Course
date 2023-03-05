// This program demonstrates the class in JavaScript.
// Class is a non-primitive data type or templates in JavaScript which holds key-value pairs.
// It encapsulates different primitive data variables or properties and methods.

class Car {
  // Constructior initializes the class variables.
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // Methods
  showCar() {
    console.log(
      `\nCar:\n Make - ${this.make}\n Model - ${this.model}\n Year - ${this.year}`
    );
  }
}

let myCar = new Car("Toyota", "Camry LE", 2012);

console.log(myCar);

myCar.showCar();
