// Say hello let'us build a calculator
alert("Hello there, you can use this simple calculator");


let num1 = Number(prompt("Enter number 1 :"));
let num2 = Number(prompt("Enter number 2:"));
let operator = prompt("Choose operation (+, -, *, /):");
let result;

if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
        result = num1 / num2;
    } if (num2 !== 0) {
        result = "Error";
} 

alert(`Result: ${result}`);
