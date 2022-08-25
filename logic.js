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
    a = parseInt(a);
    b = parseInt(b);
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

function clearDisplay() {
    let display = document.querySelector('#display');
    display.textContent = '';
}

let temp = '';

let sum = { 
    a: null,
    b: null,
    operator: null
};

function reset() {
    sum.a = null;
    sum.b = null;
    sum.operator = null;
    temp = '';
}

function displayValue(val) {
    if (sum.operator === null) { clearDisplay(); }
    let display = document.querySelector('#display');
    display.textContent = val;
}

function storeValue(val) { 
    if (sum.a === null) {
        sum.a = val;
    } else if (sum.b === null) {
        sum.b = val;
    } else {
        sum.a = val;
        sum.b = null;
    }
}

function setOperator(operator) {
    sum.operator = operator;
    storeValue(temp);
    temp = '';
}

function applyListeners() {
    let allClearButton = document.querySelector('#all-clear');
    allClearButton.addEventListener('click', () => {
        clearDisplay();
        reset();
    });
    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        clearDisplay()
    });
    let buttons = document.querySelectorAll('.operand');
    buttons.forEach(b => {
        b.addEventListener('click', () => {
            temp += b.textContent;
            displayValue(temp);
    });})
    let operatorButtons = document.querySelectorAll('.operator');
    operatorButtons.forEach(b => {
        b.addEventListener('click', () => {
            setOperator(b.textContent);
        })
    });

    let equalsButton = document.querySelector('#equals');
    equalsButton.addEventListener('click', () => {
        sum.b = temp;
        let result = operate(sum.operator, sum.a, sum.b);
        reset();
        displayValue(result);
    });
}

applyListeners();