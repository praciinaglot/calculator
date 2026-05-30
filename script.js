let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

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

buttons.forEach(button => {

    button.addEventListener("click", (e) => {

        let value = e.target.innerText;

        if (value === "=") {

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
                    input.value = result;
                }

            } catch {
                input.value = "Error";
            }

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
