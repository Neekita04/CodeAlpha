let currentDisplay = '0';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
    if (currentDisplay === '0') {
        currentDisplay = number;
    } else {
        currentDisplay += number;
    }
    updateDisplay();
}

function setOperator(op) {
    operator = op;
    firstOperand = currentDisplay;
    currentDisplay = '0';
    updateDisplay();
}

function calculate() {
    secondOperand = currentDisplay;
    let result = '';
    switch (operator) {
        case '+':
            result = parseFloat(firstOperand) + parseFloat(secondOperand);
            break;
        case '-':
            result = parseFloat(firstOperand) - parseFloat(secondOperand);
            break;
        case '*':
            result = parseFloat(firstOperand) * parseFloat(secondOperand);
            break;
        case '/':
            result = parseFloat(firstOperand) / parseFloat(secondOperand);
            break;
        case '%':
            result = parseFloat(firstOperand) % parseFloat(secondOperand);
            break;
        case '^':
            result = parseFloat(firstOperand) ** parseFloat(secondOperand);
            break;
        default:
            break;
    }
    currentDisplay = result.toString();
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = '0';
    operator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentDisplay;
}
