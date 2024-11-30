const screenInput = document.querySelector(".screen").textContent.split(" ");
console.log(screenInput)

const num1 = parseInt(screenInput[0]);
console.log(typeof(num1));

const operator = screenInput[1];
console.log(operator);

const num2 = parseInt(screenInput[2]);
console.log(num2);



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


// get buttons with document query selector
const buttons = document.querySelector(".buttons");

// add event listener to all buttons
buttons.addEventListener("click", screenOutput)