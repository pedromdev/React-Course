var readline = require("readline-sync");

var num1 = parseInt(readline.question("Please enter a number "));
var num2 = parseInt(readline.question("Please enter another number "));
var operator, result;
var validOperators = "+-/*";

do {
	operator = readline.question("Please enter an operator (+, -, /, *)");
} while (operator.length != 1 || validOperators.indexOf(operator) < 0);

if (operator == "+") {
	result = num1 + num2;
} else if (operator == "-") {
	result = num1 - num2;
} else if (operator == "/") {
	result = num1 / num2;
} else {
	result = num1 * num2;
}

console.log(num1 + " " + operator + " " + num2 + " = " + result);