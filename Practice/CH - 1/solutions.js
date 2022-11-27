// Q-1
// Create a variable of string and try to add a number to it
let a = "Yash"
let b = 5

console.log(a + b);

// Q-2
// Use typeof operator to findout the datatype of the string you created in last question

console.log(typeof (a+b ));

// Q-3
// create a constant object in javascript. Can you change it to hold a number later?

const objs = {
    name: 'Yash',
    section: 1,
    isPrincipal: true
}

// objs = 21
// console.log(objs);

// Q-4
// try to add new key to const object in problem 3

objs['Friend'] = "Kevin <3"
console.log(objs);
objs['name'] = "Dharti <3"
console.log(objs);

// Q - 4
// write a js program to create word-meaning dictionary 5 words.

const dict = {
    introvert: "a shy, reticent person.",
    extrovert: "an outgoing, socially confident person.",
    egocentric: "thinking only of oneself, without regard for the feelings or desires of others self-centred. egocentric loners with an overinflated sense of self-worth"
}

console.log(dict.egocentric);
console.log(dict['egocentric']);