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
console.log(Math.abs(-45))
console.log(Math.round(45.8923))
console.log(Math.ceil(42.892))
console.log(Math.floor(45.8932))
console.log(Math.max(45, 54, 67, 23, 49))
console.log(Math.min(45, 67, 54, 23, 49))