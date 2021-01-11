// Define the numbers and the operation here



// take the operator input
const operator = prompt("Enter operator +, -, * , / : ");
prompt.get();


// take the operand input
const number1 = parseInt(prompt("Enter first number: "));
const number2 = parseInt(prompt("Enter second number: "));

let result;

// Write if-statements here

if (operator === "+") {
    result = number1 + number2;
    console.log(`${number1} + ${number2} = ${result}`);

}
else if (operator === "-") {
    result = number1 - number2;
    console.log(`${number1} - ${number2} = ${result}`);

}
else if (operator === "*") {
    result = number1 * number2;
    console.log(`${number1} * ${number2} = ${result}`);

}
else if (operator === "/")  {
    result = number1 / number2;
    console.log(`${number1} / ${number2} = ${result}`);

}

