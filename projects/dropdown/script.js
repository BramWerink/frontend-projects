let list = ["HTML","CSS","Javascript","PHP","C#"];

let selectElement = document.querySelector(".list");

list.forEach(item => {
    let option = document.createElement("option");
    option.textContent = item;
    selectElement.appendChild(option);
});


function saveOption(){
    let savedOption = selectElement.value
    console.log(savedOption);
    document.getElementById("selected-option").innerHTML = savedOption
}

let page = list.length

setInterval(function(){
    let bingoEffect = list[page]
    page = (page + 1) % list.length;
    console.log(bingoEffect)
    document.getElementById("selected-option").innerHTML = bingoEffect
},1000);


