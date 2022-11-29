// Q1
// what will the following print in JS ?
// console.log("har\"".length);

// ----------------------------------------

// Q2
// Explore the include, startswith & endswith function of a string.
// const sentence = 'The quick brown fox jumps over the lazy dog.'
// const word = 'fox2'
// console.log(sentence.includes(word));
// console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not' } in the sentance`);

// ----------------------------------------

// Q3
// write a program to convert a given string to lower case
// let naam = "Yash Patel"
// console.log(naam.toLowerCase());

// ----------------------------------------

// Q4
// Extract the ammount out of the string
// String --> "Please give me Rs 1000"

let str1 = "Please give me Rs 1000"
let ammount = str1.slice("Please give me Rs ".length)
console.log(ammount);
console.log(Number.parseInt(ammount));

// Q5
// Try to change 4th character of a given string where you able to do it ?

let friend = "Dharti"
friend[3] = "R"
console.log(friend);