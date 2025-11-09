
let selectedColor = "#FF0000"; // Default color


function setColor(color) {
    selectedColor = color;
}


function colorElement(event) {
    event.target.style.fill = selectedColor;

}



document.addEventListener('DOMContentLoaded', function() {
    const colorableElements = document.querySelectorAll('.colorable');
    colorableElements.forEach(element => {
        element.addEventListener('click', colorElement);
    });

    
    const resetButton = document.getElementById('resetColoringButton');
    resetButton.addEventListener('click', function() {
        const colorableElements = document.querySelectorAll('.colorable');
        colorableElements.forEach(element => {
            element.style.fill = "#FFFFFF";
        });
    });
});


