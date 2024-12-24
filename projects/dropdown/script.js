let list = ["HTML", "CSS", "Javascript", "PHP", "C#"];

let selectElement = document.querySelector(".list");


list.forEach(item => {
    let option = document.createElement("option");
    option.textContent = item;
    selectElement.appendChild(option);
});


let savedOption = "";


let intervalId;
let page = 0;


window.onload = function() {
    if (savedOption === "") {
        startBingoEffect();
    }
}

function saveOption() {
    savedOption = selectElement.value; 
    document.getElementById("selected-option").innerHTML = savedOption;

    if (intervalId) {
        clearInterval(intervalId);
    }
}

function startBingoEffect() {
    intervalId = setInterval(updateBingoEffect, 1000);
}

function updateBingoEffect() {
    let bingoEffect = list[page];
    page = (page + 1) % list.length; 
    console.log(bingoEffect);
    document.getElementById("selected-option").innerHTML = bingoEffect;
}

function clearOption(){
    savedOption = ""; 
    selectElement.value = ""; 
    document.getElementById("selected-option").innerHTML = ""; 

    if (intervalId) {
        clearInterval(intervalId);
    }

    startBingoEffect();
}

