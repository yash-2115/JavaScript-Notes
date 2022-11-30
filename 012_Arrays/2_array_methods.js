// let num = [10, 34, 56, 75, 33, 19]
// console.log(num, typeof num);

// toString
// let b = num.toString() // Convertng array to string
// console.log(b, typeof b);

// join
// let c = num.join("_")
// console.log(c, typeof c);

// pop()
// let d = num.pop() // This will return popped element
// console.log(d);
// console.log(num);

// push
// let e = num.push(67) // push will return new array length
// console.log(e);
// console.log(num);

// Shift
// let f = num.shift() // Removes an element from the start of the array
// console.log(f);

// unshift
// let g = num.unshift(true) // will add element at the start of the array
// console.log(g);
// console.log(num);

// let nums = [41, 23, 33, 22, 57, 62, 75, 82, 96]
// let nums_more = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// delete
// delete nums[0]
// console.log(nums);

// concat
// let newArray = nums.concat(nums_more)
// console.log(newArray + " --> " + newArray.length);

// sort()
// let compare = (a, b) => {
//     return a - b;
// }
// nums.sort(compare)
// console.log(nums);

// reverse
// nums.reverse()
// console.log(nums);

// Splice and slice
let nums = [41, 23, 33, 22, 57, 62, 75, 82, 96]
// nums.splice(2, 3, 1021, 1022)
// console.log(nums.splice(2, 3, 1021, 1022)); // Will return deleted elements
// console.log(nums);

let newnum = nums.slice(3, 5)
console.log(newnum);