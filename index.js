const operator = prompt('Enter (+, -, * or /) symbol to perform math operation');
const first_number = parseFloat(prompt ('Enter the first number: '));
const second_number = parseFloat(prompt ('Enter the second number: '));
if (operator == '+') {
    result = first_number + second_number;  
}  
else if (operator == '-') { 
    result = first_number - second_number;  
}  
else if (operator == '*') {
    result = first_number * second_number;
}
else if (operator == '%') {
    result = first_number % second_number;
}  
else {  
    result = first_number / second_number;
} 
console.log(result);