let display = document.getElementById("display");

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }

    catch(error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}
