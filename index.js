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

let num1 = 0
let num2 = 0
let operator = ''

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

digitButtons = document.querySelectorAll('.digit')

let display = ''
digitButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        const digit = e.target.textContent
        display += digit
        document.querySelector('.text').textContent = display
    })
});

symbolButtons = document.querySelectorAll('.symbol')
symbolButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        num1 = Number(display)
        operator = e.target.textContent
        display += ' ' + operator + ' '
        document.querySelector('.text').textContent = display
        

    })
})

operateButton = document.querySelector('.operate')
operateButton.addEventListener('click', () => {
    arrayDisplay = display.split(' ')
    num2 = arrayDisplay[2]
    result = operate(Number(num1),Number(num2),operator)
    document.querySelector('.text').textContent = result
    display = result
})

