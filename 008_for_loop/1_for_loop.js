// for(let i=1; i<4; i++) {
//     console.log(i);
// }

// Program to add first n netural numbers
let sum = 0
let n = 5
for (let i=0; i < n; i++) {
    sum += (i+1)
    console.log((i+1), "+");
}
console.log("Sum if first " + n + " natural numbers is " + sum);