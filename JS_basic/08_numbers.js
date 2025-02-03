const score = 400
console.log(score)
console.log(typeof score)
const balance = new Number (100000)
console.log(balance)
console.log(typeof balance)
/*
Here "balance" is Number but if you check the data type then 
it will print object.
*/
console.log(balance.toString().length)  // Used to convert number to string.
console.log(balance.toFixed(2))         // Used in mostly in decimal points
console.log(balance.toLocaleString('en-IN'))  //improve readability of numbers.

/*************MATHS**************/

console.log(Math)
console.log(Math.abs(-45))  // Used to convert any number to positive 
console.log(Math.round(45.8923)) //Used for rounding up the number to nearest tens.
console.log(Math.ceil(42.892))    // Used for rounding to next tens.
console.log(Math.floor(45.8932))  //Rounding number to previous tens.
console.log(Math.max(45, 54, 67, 23, 49))  //Selection of max number amoung all.
console.log(Math.min(45, 67, 54, 23, 49))  //Selection of min number among all.

console.log(Math.random())
console.log((Math.random() * 10))
console.log((Math.random() * 10) + 1)

const min = 10
const max = 20

console.log((Math.floor(Math.random() * 10) + 1) + min)
/*
This is used here to get a number which is greater than
min = 10 and less than max = 20, using random module ir functions.
*/
