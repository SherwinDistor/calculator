function operate() {
    const screenInput = document.querySelector(".screen").textContent.split(" ");
    const num1 = parseInt(screenInput[0]);
    const operator = screenInput[1];
    const num2 = parseInt(screenInput[2]);
    
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

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return (num1 / num2).toFixed(2);
}

// get buttons with document query selector
const buttons = document.querySelector(".buttons");

// add event listener to all buttons
buttons.addEventListener("click", screenOutput)

function screenOutput(btn) {
    
    if (btn.target.matches(".one")) {
        console.log("1");
        document.querySelector(".screen").textContent += "1";
    } else if (btn.target.matches(".two")) {
        console.log("2");
        document.querySelector(".screen").textContent += "2";
    } else if (btn.target.matches(".three")) {
        console.log("3");
        document.querySelector(".screen").textContent += "3";
    } else if (btn.target.matches(".four")) {
        console.log("4");
        document.querySelector(".screen").textContent += "4";
    } else if (btn.target.matches(".five")) {
        console.log("5");
        document.querySelector(".screen").textContent += "5";
    } else if (btn.target.matches(".six")) {
        console.log("6");
        document.querySelector(".screen").textContent += "6";
    } else if (btn.target.matches(".seven")) {
        console.log("7");
        document.querySelector(".screen").textContent += "7";
    } else if (btn.target.matches(".eight")) {
        console.log("8");
        document.querySelector(".screen").textContent += "8";
    } else if (btn.target.matches(".nine")) {
        console.log("9");
        document.querySelector(".screen").textContent += "9";
    } else if (btn.target.matches(".zero")) {
        console.log("0");
        document.querySelector(".screen").textContent += "0";
    } else if (btn.target.matches(".add")) {
        console.log("+");
        document.querySelector(".screen").textContent += " + ";
    } else if (btn.target.matches(".subtract")) {
        console.log("-");
        document.querySelector(".screen").textContent += " - ";
    } else if (btn.target.matches(".multiply")) {
        console.log("*");
        document.querySelector(".screen").textContent += " * ";
    } else if (btn.target.matches(".divide")) {
        console.log("/");
        document.querySelector(".screen").textContent += " / ";
    } else if (btn.target.matches(".clear")) {
        console.log("clear");
        document.querySelector(".screen").textContent = "";
    } else if (btn.target.matches(".enter")) {
        console.log("enter");
        document.querySelector(".screen").textContent = operate();
    }
}