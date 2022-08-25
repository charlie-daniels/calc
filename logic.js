function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    switch (operator) {
    case '+':
        return add(a, b);
    case '-':
        return subtract(a, b);
    case '*':
        return multiply(a, b);
    case '/':
        return divide(a, b);
    }
}

function displayClear() {
    let display = document.querySelector('#display');
    display.textContent = '';
}

function displayValue(val) {
    let display = document.querySelector('#display');
    display.textContent += val;
    return val;
}

function applyListeners() {
    let buttons = document.querySelectorAll('.operator, .operand');
    buttons.forEach(b => {
        b.addEventListener('click', function() {displayValue(b.textContent)});
    });
}

applyListeners();