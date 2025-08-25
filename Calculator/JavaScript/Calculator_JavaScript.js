// Append number to display
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Append operator to display
function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Evaluate the expression
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        alert("Invalid input");
    }
}
