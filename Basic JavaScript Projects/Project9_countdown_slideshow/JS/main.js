// COUNTDOWN FUNCTION
function countdown() {
    // Get value from input
    var seconds = document.getElementById("seconds").value;

    function tick() {
        // Decrease the number of seconds
        seconds = seconds - 1;
        // Show the countdown on the page
        document.getElementById("timer").innerHTML = seconds;
        // Keep counting down if seconds > 0
        if (seconds > 0) {
            setTimeout(tick, 1000); // Call tick again after 1 second
        } else {
            // When countdown finishes
            alert("Time's up!");
            document.getElementById("timer").innerHTML = ""; // Clear timer
        }
    }

    tick(); // Start the countdown
}


// SLIDESHOW FUNCTION
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Move to next slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Loop back to first slide
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 3 seconds
    setTimeout(showSlides, 3000);
}

// Start slideshow automatically
showSlides();
