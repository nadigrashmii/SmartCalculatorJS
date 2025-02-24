let display = document.getElementById("display");

function appendToDisplay(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}


function appendToDisplay(value) {
    if (display.value === "Error") {
        display.value = "";
    }
    
    let lastChar = display.value.slice(-1);
    let operators = ["+", "-", "*", "/"];

    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    if (value === "." && display.value.includes(".")) {
        return;
    }

    display.value += value;
}

function calculateResult() {
    try {
        if (display.value.includes("/0")) {
            throw "Cannot divide by zero";
        }
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}
