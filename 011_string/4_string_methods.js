let naam = "Yash"
console.log(naam.length); // Will return length of string

console.log(naam.toUpperCase()); // Will return YASH
console.log(naam.toLowerCase()); // Will return yash

console.log(naam.slice(1, 3)); // prints as
console.log(naam.slice(2)); // prints sh

let naam2 = "Yash Patel"
let newname = naam2.replace("Patel", "Raj")
console.log(newname);

let name1 = "Yash"
let name2 = "Patel"
let name3 = name1.concat(name2) // output will be like YashPatel
console.log(name3);

let naam55 = "            Yash          "
console.log(naam55);
let newName = naam55.trim() // This will remove whitespaces
console.log(newName);

let name = "Yash"
console.log(name[0]); // Prints Y
console.log(name[1]); // Prints a