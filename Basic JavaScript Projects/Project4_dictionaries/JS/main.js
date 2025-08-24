// Dictionary object containing key-value pairs
const dictionary = {
    "JavaScript": "A programming language commonly used to create interactive effects within web browsers.",
    "HTML": "The standard markup language for documents designed to be displayed in a web browser.",
    "CSS": "A style sheet language used for describing the presentation of a document written in HTML or XML.",
    "Function": "A block of code designed to perform a particular task."
};

/**
 * Displays the definition of a given word from the dictionary.
 * Checks if the word exists in the dictionary before displaying.
 */
function displayDefinition() {
    let word = "JavaScript"; // Word to look up

    if (dictionary[word]) {
        document.getElementById("Dictionary").innerHTML = `<strong>${word}:</strong> ${dictionary[word]}`;
    } else {
        document.getElementById("Dictionary").innerHTML = `${word} is not found in the dictionary.`;
    }
}

/**
 * Deletes a specified word (key) from the dictionary object.
 * Uses the delete operator to remove the key-value pair.
 * Updates the HTML element with a confirmation message.
 */
function deleteDefinition() {
    let wordToDelete = "CSS"; // Word to delete

    if (wordToDelete in dictionary) {
        delete dictionary[wordToDelete]; // Remove the key-value pair
        document.getElementById("Dictionary").innerHTML = `${wordToDelete} has been deleted from the dictionary.`;
    } else {
        document.getElementById("Dictionary").innerHTML = `${wordToDelete} was not found in the dictionary.`;
    }
}
