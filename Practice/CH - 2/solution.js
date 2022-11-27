// Q1
// Use logical operator to find wether the age of a person lies between 10 and 20?

// age = 13

// if (age > 10 && age < 20){
//     console.log("You age lies between 10 and 20");
// }
// else {
//     console.log("Your age do not lie between 10 and 20")
// }

//------------------------------------------------

// Q2
// Demonstrate the use of switch case statement in JS

// const fev_car = "Farari"
// switch (fev_car) {
//     case 'MG Hacktor':
//         console.log("You selected MG HACKTOR.");
//         break;
//     case "BMW":
//         console.log("You selected BNW");
//         break;
//     case "Farari":
//         console.log("You Selected Farari 812")
//         break;
//     default:
//         console.log(`Sorry, we are out of ${fev_car}.`);
// }

//------------------------------------------------

// Q3
// write a javascript program to find whether a number is divisible by 2 and 3

// let num = 7
// if(num%2 == 0 && num%3 == 0) {
//     console.log('Number is divisible is by 2 and 3')
// }
// else {
//     console.log('The number you have entered is not divisible by 2 and 3');
// }

//------------------------------------------------

// Q4
// write a javascript program to find whether a number is divisible by either 2 or 3
// let num = 77
// if(num%2 == 0 && num%3 == 0) {
//     console.log('Number is divisible is by 2 and 3')
// }
// else if (num%2 == 0) {
//     console.log('This number is divisible by 2');
// }
// else if (num%3 == 0) {
//     console.log('This number is divisible by 3');
// }
// else {
//     console.log('The number you have entered is not divisible by 2 and 3');
// }

//------------------------------------------------

// Q4
// Print "you can drive" or "you cannot drive" based on age greated then 18 usin ternary operater
age = 12
console.log((age<18)? "you cannot drive": "you can drive");