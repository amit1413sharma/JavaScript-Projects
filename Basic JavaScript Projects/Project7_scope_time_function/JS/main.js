// Global variable
let globalMessage = "This is a global variable.";

// Function that uses the global variable
function useGlobal() {
  document.getElementById("globalOutput").innerHTML = globalMessage;
}

// Function that uses a local variable
function useLocal() {
  let localMessage = "This is a local variable.";
  document.getElementById("localOutput").innerHTML = localMessage;
}

// Function with an intentional error to demonstrate debugging
function debugFunction() {
  try {
    console.log(undefinedVar); // This will cause a ReferenceError
  } catch (error) {
    console.log("Caught an error:", error);
  }
  document.getElementById("debugOutput").innerHTML = "Check the console (DevTools) for error output.";
}

// Time-based greeting using Date().getHours()
function timeGreeting() {
  let currentHour = new Date().getHours();
  let message;

  if (currentHour < 12) {
    message = "Good morning!";
  } else if (currentHour < 18) {
    message = "Good afternoon!";
  } else {
    message = "Good evening!";
  }

  document.getElementById("greeting").innerHTML = message;
}

// Custom If Statement Assignment
function customIfStatement() {
  let score = 85;
  let result = "";

  if (score >= 70) {
    result = "You passed the test!";
  }

  document.getElementById("ifResult").innerHTML = result;
}

// Else Assignment: Check if user is an adult
function checkIfAdult() {
  let age = document.getElementById("userAge").value;
  let output;

  if (age >= 18) {
    output = "You are an adult.";
  } else {
    output = "You are a minor.";
  }

  document.getElementById("ageCheckResult").innerHTML = output;
}
