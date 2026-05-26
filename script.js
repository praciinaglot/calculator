let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function calculate() {
    display.value = eval(display.value);
}
