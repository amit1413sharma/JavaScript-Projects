function getReceipt() {
    // Start building the order receipt text
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var selectedSize = "";
    var sizeArray = document.getElementsByClassName("size");

    // Loop through size options
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
            break;
        }
    }

    // Determine price based on selected size
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("Size text1: " + text1);
    console.log("Subtotal: $" + runningTotal + ".00");

    // Pass the subtotal and receipt text to the next function
    getTopping(runningTotal, text1);
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");

    // Loop through all checkboxes with class "toppings"
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: (" + toppingArray[j].value + ")");
            text1 += toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;

    // First topping is free
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    runningTotal += toppingTotal;

    console.log("Total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping(s) - 1 free = $" + toppingTotal + ".00");
    console.log("Topping text1: " + text1);
    console.log("Purchase Total: $" + runningTotal + ".00");

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00</strong></h3>";
}
