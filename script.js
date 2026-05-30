let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

// Auto-resize font based on length
function adjustFontSize() {
    let len = input.value.length;

    if (len > 20) {
        input.style.fontSize = "20px";
    }
    else if (len > 15) {
        input.style.fontSize = "25px";
    }
    else if (len > 10) {
        input.style.fontSize = "30px";
    }
    else {
        input.style.fontSize = "40px";
    }
}

// Calculate result
function calculate() {
    try {
        let result = eval(input.value);

        if (
            result === Infinity ||
            result === -Infinity ||
            Number.isNaN(result)
        ) {
            input.value = "Undefined";
        } else {
            input.value = result;
        }
    }
    catch {
        input.value = "Error";
    }

    adjustFontSize();
}

// Button clicks
buttons.forEach(button => {

    button.addEventListener("click", (e) => {

        let value = e.target.innerText;

        if (value === "=") {
            calculate();
        }

        else if (value === "AC") {
            input.value = "";
        }

        else if (value === "DEL") {
            input.value = input.value.slice(0, -1);
        }

        else {
            input.value += value;
        }

        adjustFontSize();
    });

});

// Keyboard support
input.addEventListener("keydown", function(e) {

    const allowedKeys = [
        "0","1","2","3","4","5","6","7","8","9",
        "+","-","*","/","%",
        ".",
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "Enter"
    ];

    if (!allowedKeys.includes(e.key)) {
        e.preventDefault();
    }

    if (e.key === "Enter") {
        e.preventDefault();
        calculate();
    }
});

// Resize while typing
input.addEventListener("input", adjustFontSize);
