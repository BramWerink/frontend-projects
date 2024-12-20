const directions = ['0', '30', '60', '90', '120', '150', '180', '210', '240', '270', '300', '330'];
const container = document.querySelector('.container.secondary');
const h2 = document.querySelector('h2');

// Aantal streepjes
let n = 36;

for (let i = 0; i < n; i++) {
    // Create the outer div
    const div = document.createElement('div');
    div.classList.add('line-wrapper');
    
    // Create the inner div with the class "line"
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    
    // Create the p tag
    const pTag = document.createElement('p');
    
    if(i === 0){
       pTag.textContent = 'N';
       pTag.classList.add('heading');
    } else if(i === 9){
        pTag.textContent = 'E';
        pTag.classList.add('heading');
    } else if(i === 18){
        pTag.textContent = 'S';
        pTag.classList.add('heading');
    } else if(i === 27){
        pTag.textContent = 'W';
        pTag.classList.add('heading');
    } else {
        pTag.textContent = i + '0';  // For all other values, display the number
    }

    // Append the line div and p tag to the outer div
    div.appendChild(pTag);
    div.appendChild(lineDiv);

    // Append the outer div to the container
    container.appendChild(div);
}

// Function to update h2 based on the current slider position
function updateH2() {
    const containerRect = container.getBoundingClientRect();
    const middleX = containerRect.left + containerRect.width / 2;

    // Find the closest line-wrapper to the middle of the container
    let closestWrapper = null;
    let minDistance = Infinity;

    const lineWrappers = document.querySelectorAll('.line-wrapper');
    lineWrappers.forEach(wrapper => {
        const wrapperRect = wrapper.getBoundingClientRect();
        const distance = Math.abs(wrapperRect.left + wrapperRect.width / 2 - middleX);

        if (distance < minDistance) {
            minDistance = distance;
            closestWrapper = wrapper;
        }
    });

    // Update the h2 content based on the closest wrapper
    const pTag = closestWrapper.querySelector('p');
    const directionText = pTag.textContent;
    h2.textContent = directionText; // Update h2 with the direction
}

// Event listener for scroll to update the h2
container.addEventListener('scroll', updateH2);

// Initial call to set the h2 correctly on page load
updateH2();

document.getElementById('saved-heading').textContent = "Unset"

function saveHeading(){

let savedHeadingValue = document.getElementById('current-heading').textContent;
let AutoPilotCounter = document.getElementById('saved-heading');
AutoPilotCounter.textContent = savedHeadingValue;
}


function clearHeading(){
    document.getElementById('saved-heading').textContent = "Unset"
}