let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let humanInput = "";
let finalInput = "";
let op = "";
let op2 = "";
let equals = "";
let answer = "";
// Watch user input until an operator is chosen
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (document.getElementById("sub-text").innerHTML == ""){
            humanInput += number.id;
            document.getElementById("screen-text").innerHTML += number.id;
        }
    });
});

// Once operator is chosen run another event listener record the user input + chosen operator
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (document.getElementById("sub-text").innerHTML == "" && operator.id !== "="){
            op = operator.id;
            document.getElementById("screen-text").innerHTML = "";
            document.getElementById("sub-text").innerHTML = humanInput + " " + op;
        } else if (answer != "" && finalInput === ""){
            humanInput = answer;
            if (operator.id !== "="){
                op = operator.id;
            }
            document.getElementById("sub-text").innerHTML = answer + " " + op;
            document.getElementById("screen-text").innerHTML = "";
        } else if (answer != "" && finalInput !== ""){
            humanInput = answer;
            document.getElementById("sub-text").innerHTML = answer + " " + op;
            document.getElementById("screen-text").innerHTML = "";
        }
    });
});

// return operate variable on the numbers
numbers.forEach(number => {
    number.addEventListener("click", () => {
        if (op !== "" && op2 === ""){
            finalInput += number.id;
            document.getElementById("screen-text").innerHTML = finalInput;
        } else if (op !== "" && op2 !== "") {
            finalInput += number.id;
            document.getElementById("screen-text").innerHTML = finalInput;
        }
    });
});

// delete
let deleted = document.getElementById("delete");
deleted.addEventListener("click", () => {
    document.getElementById("screen-text").innerHTML = "";
    if (finalInput != ""){
        finalInput = "";
    } else {
        humanInput = "";
    }
});
// clear
let cleared = document.getElementById("clear");
cleared.addEventListener("click", () => {
    document.getElementById("screen-text").innerHTML = "";
    document.getElementById("sub-text").innerHTML = "";
    finalInput = "";
    humanInput = "";
    op = "";
    equals = "";
    answer = "";
});

// Return operate when = used
operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if (finalInput !== "" && operator.id === "="){
            if (answer !== ""){
                humanInput = answer;
            }
            answer = operate(op, Number(humanInput), Number(finalInput));
            document.getElementById("screen-text").innerHTML = answer;
            document.getElementById("sub-text").innerHTML = humanInput + " " + op + " " + finalInput + " =";
            finalInput = "";
            humanInput = "";
            equals = "";
        } else if (finalInput !== "" && humanInput !== ""){
            answer = operate(op, Number(humanInput), Number(finalInput));
            op = operator.id;
            document.getElementById("screen-text").innerHTML = answer;
            document.getElementById("sub-text").innerHTML = answer + " " + op;
            finalInput = "";
            humanInput = "";
            equals = "";
        }
    });
});

// Operate
function operate (operator, num1, num2){
    if (operator == "+"){
        return add(num1, num2);
    }
    if (operator == "-"){
        return subtract(num1, num2);
    }
    if (operator == "/"){
        return divide(num1, num2);
    }
    if (operator == "*"){
        return multiply(num1, num2);
    }            
}
// Addition
function add (num1, num2){
    return num1 + num2;
}
// Subtraction
function subtract (num1, num2){
    return num1 - num2;
}
// Multiplication
function multiply (num1, num2){
    return num1 * num2;
}
// Division
function divide (num1, num2){
    return num1 / num2;
}
