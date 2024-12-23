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

let page = 0;
setInterval(function(){
    selectElement.value = list[page]
    page = (page + 1);
    document.getElementById("selected-option").innerHTML = selectElement.value;

    console.log(selectElement.value);
}, 1000);

// todo
// 1. oops, the dropdown now also changes.
// 2. Stop looping when selection is made
