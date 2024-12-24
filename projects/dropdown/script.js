let list = ["HTML", "CSS", "Javascript", "PHP", "C#"];

let selectElement = document.querySelector(".list");

// Add options to the select element
list.forEach(item => {
    let option = document.createElement("option");
    option.textContent = item;
    selectElement.appendChild(option);
});

// Initialize savedOption as an empty string
let savedOption = "";

// Store the interval ID for clearing later
let intervalId;
let page = 0;

// Start the bingo effect upon page load if no option is selected
window.onload = function() {
    if (savedOption === "") {
        startBingoEffect(); // Start bingo effect if no option is saved
    }
}

function saveOption() {
    savedOption = selectElement.value; // Save the selected option
    document.getElementById("selected-option").innerHTML = savedOption;

    // If an option is selected, stop the bingo effect
    if (intervalId) {
        clearInterval(intervalId);
    }
}

function startBingoEffect() {
    // Start the bingo effect interval
    intervalId = setInterval(updateBingoEffect, 1000);
}

function updateBingoEffect() {
    let bingoEffect = list[page];
    page = (page + 1) % list.length; // Move to the next item in the list
    console.log(bingoEffect);
    document.getElementById("selected-option").innerHTML = bingoEffect;
}


function clearOption(){
    savedOption === ""; // Clear the saved option
    selectElement.value = "";
    document.getElementById("selected-option").innerHTML = ""

    startBingoEffect(); // Start the bingo effect again
}

// Example of a button that triggers saveOption
// Add a button in your HTML like:
// <button onclick="saveOption()">Save Option</button>
