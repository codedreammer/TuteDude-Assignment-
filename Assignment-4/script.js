const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const greetBtn = document.getElementById("greetBtn");

    greetBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (name === "") {
        greeting.textContent = "Hello";
    } else {
        const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        greeting.textContent = `Hello, ${capitalizedName}!`;
    }
});


    const boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener('mouseover', () => {
            if (box.textContent === 'Red') {
                box.style.backgroundColor = 'red';
            } else if (box.textContent === 'Green') {
                box.style.backgroundColor = 'green';
            } else if (box.textContent === 'Blue') {
                box.style.backgroundColor = 'blue';
            } else if (box.textContent === 'Yellow') {
                box.style.backgroundColor = 'yellow';
            }
        });
        
        box.addEventListener('mouseout', () => {
            box.style.backgroundColor = 'white';
            box.style.color = 'black';
        });
    });