// フィールド
let number = 0;
const stack = [];

// 表示部の要素を取得
function getElement() {
    let element = document.getElementById('display');
    return element;
}

// 入力した数値を表示する
function addNum(num) {
    number *= 10;
    number += num;
    element = getElement();
    element.innerHTML = number;
}

// 数値をスタックに積む
function ok() {
    stack.push(number);
    number = 0;
    element = getElement();
    element.innerHTML = 0;
}

// 演算子を判断して計算する
function calc(operand) {
    let num1 = stack.pop();
    let num2 = stack.pop();
    let ans = 0;
    element = getElement();

    if (operand == '+') {
        ans = num1 + num2;
    } else if (operand == '-') {
        ans = num2 - num1;
    } else if (operand == '×') {
        ans = num1 * num2;
    } else if (operand == '÷') {
        ans = num2 / num1;
    } else if (operand == '%') {
        ans = num2 % num1;
    }

    element = getElement();
    element.innerHTML = operand;
    stack.push(ans);
}

// 計算結果を表示する
function equal() {
    element = getElement();
    element.innerHTML = stack.pop();
}

// 初期化する
function allclear() {
    element = getElement();
    element.innerHTML = 0;
}
