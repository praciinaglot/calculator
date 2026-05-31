let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

const operators = ["+", "-", "*", "/", "%"];

function adjustFontSize() {
    const len = input.value.length;

    if (len > 20) {
        input.style.fontSize = "20px";
    } else if (len > 15) {
        input.style.fontSize = "25px";
    } else if (len > 10) {
        input.style.fontSize = "30px";
    } else {
        input.style.fontSize = "40px";
    }
}

function calculate() {

    if (input.value.trim() === "") return;

    try {

        let result = eval(input.value);

        if (
            result === Infinity ||
            result === -Infinity ||
            Number.isNaN(result)
        ) {
            input.value = "Undefined";
        }
        else {

            if (Number.isFinite(result)) {
                result = parseFloat(result.toFixed(8));
            }

            input.value = result;
        }

    } catch {
        input.value = "Error";
    }

    adjustFontSize();
}

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;
        const lastChar = input.value.slice(-1);

        if (value === "=") {
            calculate();
            return;
        }

        if (value === "AC") {
            input.value = "";
            adjustFontSize();
            return;
        }

        if (value === "DEL") {
            input.value = input.value.slice(0, -1);
            adjustFontSize();
            return;
        }

        if (input.value.length >= 25) {
            return;
        }

        if (operators.includes(value)) {

            if (input.value === "") return;

            if (operators.includes(lastChar)) {
                input.value =
                    input.value.slice(0, -1) + value;
            } else {
                input.value += value;
            }

            adjustFontSize();
            return;
        }

        if (value === ".") {

            let parts = input.value.split(/[+\-*/%]/);

            if (
                parts[parts.length - 1].includes(".")
            ) {
                return;
            }
        }

        input.value += value;
        adjustFontSize();
    });
});

input.addEventListener("keydown", function (e) {

    const allowedKeys = [
        "0","1","2","3","4","5","6","7","8","9",
        "+","-","*","/","%",
        ".",
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Enter",
        "Escape"
    ];

    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
        return;
    }

    const lastChar = input.value.slice(-1);

    if (
        operators.includes(e.key) &&
        operators.includes(lastChar)
    ) {
        e.preventDefault();
        return;
    }

    if (e.key === ".") {

        let parts = input.value.split(/[+\-*/%]/);

        if (
            parts[parts.length - 1].includes(".")
        ) {
            e.preventDefault();
            return;
        }
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }

    if (e.key === "Escape") {
        e.preventDefault();
        input.value = "";
        adjustFontSize();
    }
});

input.addEventListener("input", adjustFontSize);
