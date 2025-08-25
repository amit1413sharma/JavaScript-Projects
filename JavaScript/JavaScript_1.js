function showAnimalSound() {
    let animal = document.getElementById("choice").value;
    let sound;

    switch (animal) {
        case "dog":
            sound = "A dog says: Woof!";
            break;
        case "cat":
            sound = "A cat says: Meow!";
            break;
        case "bird":
            sound = "A bird says: Tweet!";
            break;
        case "fish":
            sound = "A fish says: ... (silence)";
            break;
        case "rabbit":
            sound = "A rabbit says: Squeak!";
            break;
        default:
            sound = "Unknown animal!";
    }

    document.getElementById("output").innerHTML = sound;
}

// New function utilizing getElementsByClassName()
function highlightFacts() {
    // Get all elements with class "animal-info"
    let facts = document.getElementsByClassName("animal-info");

    // Loop through the HTMLCollection and change style
    for (let i = 0; i < facts.length; i++) {
        facts[i].style.backgroundColor = "yellow";
        facts[i].style.fontWeight = "bold";
    }
}
