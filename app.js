const inputField = document.querySelector(".textarea__input");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    /*let keyValue = key.textContent.trim();
    let values = [];
    let secondary = null;
    let primary = null;

    keyValue = keyValue.replace(/  +/g, ' ').toLowerCase();
    console.log("Value: " + keyValue);
    values = keyValue.split(' ');
    console.log("Length: " + values.length);

    if (values.length > 1) {
        [secondary, primary] = values;
    } else {
        [primary] = values;
    }

    key.dataset.primary = primary;
    key.dataset.secondary = secondary;*/

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

document.addEventListener('keydown', (event) => {
    const keyPrimary = document.querySelector(`[data-primary="${event.key}"], [data-primary="${event.key.toLowerCase()}"]`);
    const keySecondary = document.querySelector(`[data-secondary="${event.key}"]`);
    console.log(event.key);

    if (keyPrimary) {
        keyPrimary.classList.add("key__pressed");
    }

    if (keySecondary) {
        keySecondary.classList.add("key__pressed");
    }
});

document.addEventListener('keyup', (event) => {
    const keyPrimary = document.querySelector(`[data-primary="${event.key}"], [data-primary="${event.key.toLowerCase()}"]`);
    const keySecondary = document.querySelector(`[data-secondary="${event.key}"]`);
    console.log(event.key);

    if (keyPrimary) {
        keyPrimary.classList.remove("key__pressed");
    }

    if (keySecondary) {
        keySecondary.classList.remove("key__pressed");
    }
});