function onePlusAvg(x, y){
    console.log('Done');
    return 1 + (x + y)/2
}

// arrow function
const sum = (p, q) => {
    return p + q
}

// function which is not returning any thing
const hello = () => {
    console.log("Hello everyone");
}

let a = 1;
let b = 2;
let c = 3;

let function_ki_value = hello(); // storing value of fucntion in variable

console.log("1 + Avg of a & b is ", onePlusAvg(a, b));
console.log("1 + Avg of b & c is ", onePlusAvg(b, c));
console.log("1 + Avg of a & c is ", onePlusAvg(a, c));
console.log(sum(9, 7));

hello(); // This is way to call funtion which is not returning anyting
console.log(function_ki_value);