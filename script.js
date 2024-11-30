const num1; 
const num2;
const operator; 

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else {
        return divide(num1, num2);
    }
}


function add(num1, num2) {
    return num1 + num2;
}

console.log(add(3, 4));

function subtract(num1, num2) {
    return num1 - num2;
}

console.log(subtract(9, 6));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(5, 5));

function divide(num1, num2) {
    return num1 / num2;
}

console.log(divide(9, 3));