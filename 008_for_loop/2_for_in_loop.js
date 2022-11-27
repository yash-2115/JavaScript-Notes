let obj = {
    yash: 99,
    drishti: 98,
    shreya: 23,
    kevin: 56
}

for (let a in obj){
    // console.log(a) // This will print only keys
    console.log("Marks of " + a + " are " + obj[a]);
}