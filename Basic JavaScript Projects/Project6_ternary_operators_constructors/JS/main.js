// Ternary Operator Function
// This function prompts the user to enter their age,
// then uses a ternary operator to check if they're an adult or a minor
function checkAge() {
  let age = prompt("Enter your age:");
  let message = (age >= 18) ? "You are an adult." : "You are a minor.";
  document.getElementById("ageResult").innerHTML = message;
}

// Constructor Function: Person
// This constructor creates a Person object with first name, last name, and age
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

// This function creates a Person object using the constructor
// and displays their full name and age in the HTML
function createPerson() {
  let person1 = new Person("John", "Doe", 25);
  let result = `Person: ${person1.fullName()}, Age: ${person1.age}`;
  document.getElementById("personResult").innerHTML = result;
}

// Constructor Function: Car
// Uses "new" and "this" to create a Car object with make, model, and year
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.getInfo = function () {
    return `${this.year} ${this.make} ${this.model}`;
  };
}

// This function creates a Car object using "new" and displays it in the HTML
function createCar() {
  let myCar = new Car("Tesla", "Model S", 2023);
  document.getElementById("carInfo").innerHTML = myCar.getInfo();
}

// Nested Function Example
// A function is defined inside another function to demonstrate closure
function count() {
  // Outer function
  function increment() {
    let start = 0;

    // Inner function modifies the outer variable
    function plusOne() {
      start += 1;
    }

    plusOne(); // Call inner function
    return start;
  }

  // Display result from nested function
  document.getElementById("nestedResult").innerHTML = `Nested count result: ${increment()}`;
}
