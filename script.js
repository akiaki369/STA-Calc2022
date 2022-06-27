let hensu = 0;

const stack = [];

function addnum(num) {
    let element = document.getElementById('hyouji');
    hensu *= 10;
    hensu += num;
    element.innerHTML = hensu;
}

function ok() {
    stack.push(hensu);
    let element = document.getElementById('hyouji');
    element.innerHTML = 0;
    hensu = 0;
}

function plus() {
    let keisan1 = stack.pop();
    let keisan2 = stack.pop();
    let tochu = keisan1 + keisan2;
    stack.push(tochu);
    let element = document.getElementById('hyouji');
    element.innerHTML = 0;
}

function minus() {
    let keisan1 = stack.pop();
    let keisan2 = stack.pop();
    let tochu = keisan2 - keisan1;
    stack.push(tochu);
    let element = document.getElementById('hyouji');
    element.innerHTML = 0;
}

function multiple() {
    let keisan1 = stack.pop();
    let keisan2 = stack.pop();
    let tochu = keisan1 * keisan2;
    stack.push(tochu);
    let element = document.getElementById('hyouji');
    element.innerHTML = 0;
}

function divide() {
    let keisan1 = stack.pop();
    let keisan2 = stack.pop();
    let tochu = keisan1 / keisan2;
    stack.push(tochu);
    let element = document.getElementById('hyouji');
    element.innerHTML = 0;
}

function equal() {
    let element = document.getElementById('hyouji');
    element.innerHTML = stack.pop();
}

function allclear() {
    let element = document.getElementById('hyouji');
    element.innerHTML = 0;
}
