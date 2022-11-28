// Q1
// Write a program to print the marks of a student in an object using for loop

let marks = {
    yash: 91,
    subham: 19,
    lovish: 90,
    Monika: 3
}

// for (let i=0; i<Object.keys(marks).length; i++){
//     console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
    // console.log(marks);
    // console.log(Object.keys(marks));
// }

// Q2
// write a program in q1 using forin loops

// for (let i in marks){
//     console.log("The marks of " + i + " are " + marks[i]);
// }

// Q3
// write a program to print "try again" until the user enter corrent number.
// let cn = 4
// let i

// while (i != cn) {
//     console.log('try again');
//     i = prompt("Enter the number")
// }
// console.log("You have entered a correct number");

//Q4
// Write a function to find out mean of 5 number

const mean = (a, b, c, d) => {
    return (a+b+c+d)/4
}

console.log(mean(5,10,10,5));