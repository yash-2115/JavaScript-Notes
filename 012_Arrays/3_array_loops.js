let num = [2, 5, 7, 8, 10, 6]

// ----------- for loop
// for(let i=0; i<num.length; i++){
//     console.log(num[i]);
// }

// ----------- forEach
// num.forEach((element) => {
//     console.log(element * element);
// })

// ----------- Array.from
// let name = "Yash"
// let arr = Array.from(name)
// console.log(arr);

// ----------- for..of
// for(let i of num) {
//     console.log(i);
// }

// ----------- for..in
for (let i in num){
    console.log(num[i]);
}