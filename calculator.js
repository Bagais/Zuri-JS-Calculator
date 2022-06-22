const operator = prompt('Enter operator(either +, -, * or /): ');

const firstNumber = parseFloat(prompt('Enter first number: '));
const secondNumber = parseFloat(prompt('Enter second number: '));

let answer;

if (operator == '+') {
	answer = firstNumber + secondNumber;
}
else if (operator == '-') {
	answer = firstNumber - secondNumber;
}
else if (operator == '*') {
	answer = firstNumber * secondNumber;
}
else {
	answer = firstNumber / secondNumber;
}

alert(`${firstNumber} ${operator} ${secondNumber} = ${answer}`);