// This function increases the value of a counter using the += operator
function addFive() {
    let counter = 0;           // Initialize counter variable
    counter += 5;              // Add 5 to the counter using +=
    
    // Display the result inside the HTML element with ID "result"
    document.getElementById("result").textContent = "Counter value: " + counter;
}
