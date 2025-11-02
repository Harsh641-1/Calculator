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
let result = ''
let display = ''
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

const clear = () => {
    num1 = 0
    num2 = 0
    operator = ''
    display = ''
    document.querySelector('.text').textContent = display
}

const handleDigit = (e) => {
       if (result !== ''){
            result = ''
            clear()
         }
        if (display.includes('.')){
            pointElement = document.querySelector('.point')
            pointElement.removeEventListener('click', handleDigit)
        }
        const digit = e.target.textContent
        display += digit
        document.querySelector('.text').textContent = display
    }

digitButtons = document.querySelectorAll('.digit')
digitButtons.forEach(button => {
    button.addEventListener('click', handleDigit)
});

symbolButtons = document.querySelectorAll('.symbol')
symbolButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (display.includes('+')|| display.includes('-') || display.includes('*') || display.includes('/')){
            arrayDisplay = display.split(' ')
           
            operator = arrayDisplay[1]
            num1 = arrayDisplay[0]
            num2 = arrayDisplay[2]
            result = operate(Number(num1),Number(num2),operator)
            operator = e.target.textContent
            display = result + ' ' + operator + ' '
            document.querySelector('.text').textContent = display
            result = ''
            

        }else {

            num1 = Number(display)
            operator = e.target.textContent
            display += ' ' + operator + ' '
            document.querySelector('.text').textContent = display
        }

    })
})

operateButton = document.querySelector('.operate')
operateButton.addEventListener('click', () => {
    arrayDisplay = display.split(' ')
    num1 = arrayDisplay[0]
    num2 = arrayDisplay[2]
    result = String(operate(Number(num1),Number(num2),operator))
    document.querySelector('.text').textContent = result
    display = result
    
})

clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clear)

backspaceButton = document.querySelector('.backspace')
backspaceButton.addEventListener('click', () => {
    console.log(display)
    if (display.includes(' ')){
    arrayDisplay = display.split(' ')
    arrayDisplay.pop()
    display = arrayDisplay.join(' ')
    document.querySelector('.text').textContent = display
    } else {
        arrayDisplay = display.split('')
        arrayDisplay.pop()
        display = arrayDisplay.join('')
        document.querySelector('.text').textContent = display
    }
})