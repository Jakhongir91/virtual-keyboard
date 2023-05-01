const inputField = document.querySelector(".textarea__input");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.addEventListener('click', (event) => {
        if (event.eventPhase === 2) {
            event.stopPropagation();
        }

        let keyPressed = event.currentTarget.textContent.trim();

        if (keyPressed === 'Shift') {

        }

        console.log('Text content: ' + event.target.textContent);
        console.log('Event phase: ' + event.eventPhase);
        console.log('Current target: ' + event.currentTarget.textContent);
        inputField.textContent += keyPressed;
    })
})