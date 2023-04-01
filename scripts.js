const drawingGrid = document.getElementById("drawing-grid");
const restart = document.getElementById("restart");

// Create grid
for (let i = 0; i < 30 * 30; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    drawingGrid.appendChild(pixel);
}

// Color pixels
drawingGrid.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("pixel")) {
        event.target.style.backgroundColor = "black";
    }
});

// Restart drawing
restart.addEventListener("click", () => {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    });
});
