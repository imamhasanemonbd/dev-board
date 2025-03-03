const colors = ['#ffebcd', '#d3f9d8', '#fff8dc', '#d8e2dc', '#c7c9e1'];
let currentColorIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex++;

    while (currentColorIndex >= colors.length) {
        currentColorIndex = 0; 
    }
}
