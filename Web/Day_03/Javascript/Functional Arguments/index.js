// Passing a function to another function as an argument

function sum(a, b){
    return a + b;
}

function multiply(a, b){
    return a * b;
}

function substract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function doOperation(a, b, op){
    let ans = op(a, b);
    return ans;
}

console.log(doOperation(100, 223, sum));