const directions = ['0', '30', '60', '90', '120', '150', '180', '210', '240', '270', '300', '330'];
const container = document.querySelector('.container.secondary');

// Aantal streepjes
let n = 36;

for (let i = 0; i < n; i++) {
    // Create the outer div
    const div = document.createElement('div');
    div.classList.add('line-wrapper')
    

    // Create the inner div with the class "line"
    const lineDiv = document.createElement('div');
    lineDiv.classList.add('line');
    
    // Create the p tag
    const pTag = document.createElement('p');
    // pTag.textContent = i;  // You can set dynamic text or leave it empty

    if(i === 0){
       pTag.textContent = 'N'
       pTag.classList.add('heading')
    } else if(i === 9){
        pTag.textContent = 'E'
        pTag.classList.add('heading')
    } else if(i === 18){
        pTag.textContent = 'S'
        pTag.classList.add('heading')
    } else if(i === 27){
        pTag.textContent = 'W'
        pTag.classList.add('heading')
    }else {
        pTag.textContent = i + '0';  // For all other values, display the number
    }

    // Append the line div and p tag to the outer div
    div.appendChild(pTag);
    div.appendChild(lineDiv);


    // Append the outer div to the container
    container.appendChild(div);
}

