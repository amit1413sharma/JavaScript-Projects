// --- Typeof operator example ---
let myVariable = 42;
document.getElementById("typeofExample").innerHTML = `The type of myVariable is: ${typeof myVariable}`;

// --- Type coercion examples ---
let num = 10;
let str = "5";
let bool = true;

document.getElementById("coercionExample1").innerHTML = `num + str = ${num + str} (type: ${typeof (num + str)})`;
document.getElementById("coercionExample2").innerHTML = `num + Number(str) = ${num + Number(str)} (type: ${typeof (num + Number(str))})`;
document.getElementById("coercionExample3").innerHTML = `num + bool = ${num + bool} (type: ${typeof (num + bool)})`;

// --- Boolean logic examples ---
let isGreater = 10 > 5;
let isLess = 3 < 1;

document.getElementById("boolTrue").innerHTML = `Is 10 greater than 5? ${isGreater}`;
document.getElementById("boolFalse").innerHTML = `Is 3 less than 1? ${isLess}`;

// --- Infinity examples ---
let largeNumber = 1e309;          // Infinity
let largeNegativeNumber = -1e309; // -Infinity

document.getElementById("infinity").innerHTML = `Large number result: ${largeNumber}`;
document.getElementById("negInfinity").innerHTML = `Large negative number result: ${largeNegativeNumber}`;

// --- Double equal (==) operator examples ---
let doubleEqualTrue = (5 == "5");
let doubleEqualFalse = (5 == "6");

document.getElementById("doubleEqualTrue").innerHTML = `5 == "5" is ${doubleEqualTrue}`;
document.getElementById("doubleEqualFalse").innerHTML = `5 == "6" is ${doubleEqualFalse}`;

// --- Triple equal (===) operator examples ---
let tripleEqualTrue = (5 === 5);
let tripleEqualFalseDiffTypeAndValue = (5 === "6");
let tripleEqualFalseDiffTypeSameValue = (5 === "5");
let tripleEqualFalseSameTypeDiffValue = (5 === 6);

document.getElementById("tripleEqualTrue").innerHTML = `5 === 5 is ${tripleEqualTrue}`;
document.getElementById("tripleEqualFalseDiffTypeAndValue").innerHTML = `5 === "6" is ${tripleEqualFalseDiffTypeAndValue}`;
document.getElementById("tripleEqualFalseDiffTypeSameValue").innerHTML = `5 === "5" is ${tripleEqualFalseDiffTypeSameValue}`;
document.getElementById("tripleEqualFalseSameTypeDiffValue").innerHTML = `5 === 6 is ${tripleEqualFalseSameTypeDiffValue}`;

// --- AND (&&) operator examples ---
let andTrue = (10 > 5 && 8 > 3);
let andFalse = (10 > 5 && 2 > 3);

document.getElementById("andTrue").innerHTML = `(10 > 5) && (8 > 3) is ${andTrue}`;
document.getElementById("andFalse").innerHTML = `(10 > 5) && (2 > 3) is ${andFalse}`;

// --- OR (||) operator examples ---
let orTrue = (10 > 5 || 2 > 3);
let orFalse = (1 > 5 || 2 > 3);

document.getElementById("orTrue").innerHTML = `(10 > 5) || (2 > 3) is ${orTrue}`;
document.getElementById("orFalse").innerHTML = `(1 > 5) || (2 > 3) is ${orFalse}`;

// --- NOT (!) operator examples ---
let notTrue = !false;  // NOT false = true
let notFalse = !true;  // NOT true = false

document.getElementById("notTrue").innerHTML = `!false is ${notTrue}`;
document.getElementById("notFalse").innerHTML = `!true is ${notFalse}`;

// --- Console log math operation ---
let a = 7;
let b = 3;
let sum = a + b;

console.log(`The sum of ${a} and ${b} is:`, sum);
