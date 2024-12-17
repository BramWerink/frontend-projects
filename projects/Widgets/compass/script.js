
function drawCompassLines() {
  const compass = document.getElementById("compass");
  const linesCount = 8; // Fixed number of lines (N, NE, E, SE, S, SW, W, NW)
  const radius = compass.offsetWidth / 2;
  const angleStep = 360 / linesCount;

  for (let i = 0; i < linesCount; i++) {
    const angle = angleStep * i;
    const line = document.createElement("div");
    line.classList.add("line");

    // Calculate position using trigonometry
    const offsetX = radius * Math.cos((angle - 90) * (Math.PI / 180));
    const offsetY = radius * Math.sin((angle - 90) * (Math.PI / 180));

    // Apply transform to rotate the line and position it
    line.style.transform = `rotate(${angle}deg) translate(${offsetX}px, ${offsetY}px)`;

    compass.appendChild(line);
  }
}

// Draw the compass lines when the page loads
window.onload = drawCompassLines;
