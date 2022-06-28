let number = 0;

const stack = [];

function getElement() {
    let element = document.getElementById('display');
    return element;
}

function addNum(num) {
    element = getElement();
    number *= 10;
    number += num;
    element.innerHTML = number;
}

function ok() {
    stack.push(number);
    element = getElement();
    element.innerHTML = 0;
    number = 0;
}

function plus() {
    let number1 = stack.pop();
    let number2 = stack.pop();
    let ans = number1 + number2;
    stack.push(ans);
    element = getElement();
    element.innerHTML = 0;
}

function minus() {
    let number1 = stack.pop();
    let number2 = stack.pop();
    let ans = number2 - number1;
    stack.push(ans);
    element = getElement();
    element.innerHTML = 0;
}

function multiple() {
    let number1 = stack.pop();
    let number2 = stack.pop();
    let ans = number1 * number2;
    stack.push(ans);
    element = getElement();
    element.innerHTML = 0;
}

function divide() {
    let number1 = stack.pop();
    let number2 = stack.pop();
    let ans = number2 / number1;
    stack.push(ans);
    element = getElement();
    element.innerHTML = 0;
}

function mod() {
    let number1 = stack.pop();
    let number2 = stack.pop();
    let ans = number2 % number1;
    stack.push(ans);
    element = getElement();
    element.innerHTML = 0;
}

function equal() {
    element = getElement();
    element.innerHTML = stack.pop();
}

function allclear() {
    element = getElement();
    element.innerHTML = 0;
}
