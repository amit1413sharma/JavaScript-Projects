// Adds two numbers and displays the result
function additionFunction() {
    var result = 5 + 3;
    document.getElementById("Math").innerHTML = "5 + 3 = " + result;
}

// Subtracts two numbers and displays the result
function subtractionFunction() {
    var result = 10 - 4;
    document.getElementById("Subtraction").innerHTML = "10 - 4 = " + result;
}

// Multiplies two numbers and displays the result
function multiplicationFunction() {
    var result = 6 * 7;
    document.getElementById("Multiplication").innerHTML = "6 × 7 = " + result;
}

// Divides two numbers and displays the result
function divisionFunction() {
    var result = 20 / 5;
    document.getElementById("Division").innerHTML = "20 ÷ 5 = " + result;
}

// Performs multiple operations and displays the result
function multipleOperationsFunction() {
    var result = (5 + 3) * 2 - 4 / 2; // Parentheses, multiplication, subtraction, and division
    document.getElementById("Multiple").innerHTML = "(5 + 3) × 2 - 4 ÷ 2 = " + result;
}

// Uses modulus operator to find remainder and displays the result
function modulusFunction() {
    var result = 10 % 3;
    document.getElementById("Modulus").innerHTML = "10 % 3 = " + result;
}

// Uses negation operator to convert a number to its negative and displays the result
function negationFunction() {
    var number = 9;
    var result = -number;
    document.getElementById("Negation").innerHTML = "The negation of 9 is " + result;
}

// Increments a number by 1 and displays the result
function incrementFunction() {
    var x = 10;
    x++; // Increment operator
    document.getElementById("Increment").innerHTML = "10 incremented is " + x;
}

// Decrements a number by 1 and displays the result
function decrementFunction() {
    var y = 10;
    y--; // Decrement operator
    document.getElementById("Decrement").innerHTML = "10 decremented is " + y;
}

// Generates a random decimal between 0 (inclusive) and 1 (exclusive) and displays it
function randomFunction() {
    var result = Math.random();
    document.getElementById("Random").innerHTML = "Random number between 0 and 1: " + result;
}
