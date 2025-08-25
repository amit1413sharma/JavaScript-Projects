// WHILE LOOP EXAMPLE
function displayWhileLoop() {
    let output = "";
    let counter = 1;

    while (counter <= 5) {
        output += "Count: " + counter + "<br>";
        counter++;
    }

    document.getElementById("loop").innerHTML = output;
}

// FOR LOOP EXAMPLE with ARRAY
function for_Loop() {
    let Instruments = ["Guitar", "Piano", "Violin", "Drums", "Flute", "Saxophone"];
    let Content = "";

    for (let i = 0; i < Instruments.length; i++) {
        Content += Instruments[i] + "<br>";
    }

    document.getElementById("List of instruments").innerHTML = Content;
}

// ARRAY + getElementById().innerHTML EXAMPLE
function displayArrayItem() {
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    document.getElementById("arrayOutput").innerHTML = "Selected fruit: " + fruits[2]; // "Cherry"
}

// CONST OBJECT + PROPERTY MODIFICATION
function constant_function() {
    const musicalInstrument = {
        type: "Guitar",
        brand: "Fender",
        color: "black"
    };

    musicalInstrument.color = "red";
    musicalInstrument.price = "$999";

    document.getElementById("Constant").innerHTML =
        "The " + musicalInstrument.color + " " +
        musicalInstrument.brand + " " +
        musicalInstrument.type + " costs " +
        musicalInstrument.price + ".";
}

// LET KEYWORD EXAMPLE
function letKeywordExample() {
    let message = "Hello from inside the block!";

    if (true) {
        let blockScoped = "This is block scoped with let.";
        message += "<br>" + blockScoped;
    }

    document.getElementById("letExample").innerHTML = message;
}

// OBJECT USING LET + METHOD
function showPersonInfo() {
    let person = {
        firstName: "Alice",
        lastName: "Johnson",
        age: 30,
        job: "Web Developer",
        getInfo: function () {
            return this.firstName + " " + this.lastName + " is a " +
                   this.age + "-year-old " + this.job + ".";
        }
    };

    document.getElementById("objectOutput").innerHTML = person.getInfo();
}

// Run on page load
displayWhileLoop();
