// concat() example — joins multiple strings together
function concatenateStrings() {
    var part1 = "Hello, ";
    var part2 = "this is ";
    var part3 = "a string ";
    var part4 = "concatenation example.";

    // Combine all parts into one sentence
    var fullSentence = part1.concat(part2, part3, part4);

    // Display the result in the HTML
    document.getElementById("concatResult").innerHTML = fullSentence;
}

// slice() example — extracts a part of a string
function sliceString() {
    var fullText = "JavaScript string methods are powerful.";

    // Extract the word "string" from the sentence
    var sliced = fullText.slice(11, 17); // characters from index 11 to 16

    // Display the result in the HTML
    document.getElementById("sliceResult").innerHTML = "Sliced text: " + sliced;
}

// toString() example — converts a number to a string
function numberToString() {
    var number = 2025;

    // Convert number to string
    var numberAsString = number.toString();

    // Display the result in the HTML
    document.getElementById("toStringResult").innerHTML = "Number as string: " + numberAsString;
}

// toPrecision() example — formats a number with a specified length
function precisionNumber() {
    var num = 123.456789;

    // Format the number with 5 significant digits
    var preciseNum = num.toPrecision(5);

    // Display the result in the HTML
    document.getElementById("toPrecisionResult").innerHTML = "Precise number (5 digits): " + preciseNum;
}

// Call all functions when the page loads
concatenateStrings();
sliceString();
numberToString();
precisionNumber();
