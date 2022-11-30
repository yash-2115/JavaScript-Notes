let arr = [55, 23, 43, 77, 84]

// ------- map method
// let a = arr.map((yash, index, array) => {
//     console.log(yash, index, array);
//     return yash + 1
// })
// console.log(a);

// ------- filter method
// let arr2 = [ 56, 24, 44, 78, 85 ]
// let a2 = arr2.filter((a) => {
//     return a<60
// })
// console.log(a2);

// ------- reduce method
let arr3 = [1, 3, 5, 7, 7, 8, 9, 2]

const reduce_func = (h1, h2) => {
    return h1 + h2
}
let newarr = arr3.reduce(reduce_func)
console.log(newarr);