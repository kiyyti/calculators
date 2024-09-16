const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button"); 
const operators = document.querySelectorAll('.operator');
const equal = document.getElementById("equal");
const clear = document.getElementById('clear');

let operator;
var result, num1, num2;

function input(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/') {
        operator = value;
        num1 = display.value; 
        display.value = ''; 
    } else if (value === '=') {
        if (operator && num1 !== '' && display.value !== '') {
            num2 = display.value;
            result = calculate(num1, num2, operator);
            display.value = result;
            num1 = result; 
            num2 = '';
            operator = ''; 
        }
    } else if (value === 'C') {
        display.value = '';
        num1 = '';
        num2 = '';
        operator = '';
    } else {
        display.value += value; 
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.dataset.value; 
        input(value); 
    });
});

function calculate(num1, num2, operator) {
    num1 = parseFloat(num1); 
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            return result;
        case '-':
            result = num1 - num2;
            return result;
        case '*':
            result = num1 * num2;
            return result;
        case '/':
            if (num2 === 0) {
                return 'Error'; 
            } else {
                result = num1 / num2;
                return result;
            }
    }
}