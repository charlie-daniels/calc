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
    a = parseFloat(a);
    b = parseFloat(b);
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

function evaluate() {
    let result = Math.round(operate(sum.operator, sum.a, sum.b) * 1000) / 1000;
    return result;
}

function applyListeners() {
    let allClearButton = document.querySelector('#all-clear');
    allClearButton.addEventListener('click', () => {
        clearDisplay();
        reset();
    });
    let clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        temp = '';
        clearDisplay();
    });
    let dotButton = document.querySelector('#dot');
    dotButton.addEventListener('click', () => {
        if (!temp.includes('.')){
            temp += '.';
            displayValue(temp);
        }
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
            if (sum.a !== null && sum.b !== null) { // both values are filled
                let result = evaluate(); // evaluate the expression
                reset(); // set sum to null
                sum.a = result; // set result as first operand
            }
        })
    });
    let percentButton = document.querySelector('#percent');
    percentButton.addEventListener('click', b => {
        temp /= 100;
        displayValue(temp);
    });
    let equalsButton = document.querySelector('#equals');
    equalsButton.addEventListener('click', () => {
        sum.b = temp;
        displayValue(evaluate());
        reset();
    });

    document.addEventListener('keypress', (e) => {
        let buttons = document.querySelectorAll('button');
        buttons.forEach(b => {
            if (b.textContent === e.key) {
                let clickEvent = new Event('click');
                b.dispatchEvent(clickEvent);
            } 
        })
    }, false);
}

applyListeners();