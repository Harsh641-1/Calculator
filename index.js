function add(num1, num2){
    return num1 + num2
}

function subtract(num1, num2){
    return num1 - num2
}

function multiply(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1 / num2
}
/*
const num1 = Number(prompt('Enter first number:'))
const num2 = Number(prompt('Enter second number:'))
const operator = prompt('Enter operation')
*/
function operate(num1, num2, operator){
    if (operator === '+'){
        result = add(num1, num2)
    } else if (operator === '-'){
        result = subtract(num1, num2)
    }else if (operator === '*') {
        result = multiply(num1, num2)
    }else if (operator === '/'){
        result = divide(num1, num2)
    } else {
        result = 'Enter correct operator'
    }
    return result
}

console.log(operate(num1, num2, operator))