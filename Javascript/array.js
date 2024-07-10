const array = ["Amrit Ranjan", 24, "amrit@google.com", true]
console.log(array)
//This was just to print the array
console.log(array[3])
//Here we are checking for indexing.
console.log(typeof array)
// Array consists of objects.
array.push("Graduates")

console.log(array)
//Here we are adding Graduates at last index
array.pop()
console.log(array)
//Here we are terminating last index out.
array.shift()
console.log(array)
//Here we are shifting zeroth index out.
array.unshift("Amrit Ranjan")
console.log(array)
//Here we are unshifting what we shifted earlier.
array.includes(24)
console.log(array.includes(24))
//Here we are checking if 24 is included in the array or not.

//***********************Arrays Functions********************

const marvel =["Captian American", "Iron-man", "Thor", "Spiderman"]
const Dc = ["Bat-Man", "Superman", "Wonder-woman", "Aquaman"]
marvel.push(Dc)
console.log(marvel)
console.log(marvel[4][2])
//Here we wanted to print "Winder-woman"

const all_heros = marvel.concat(Dc)
console.log(all_heros)

const all_new_heros = [...marvel, ...Dc]
console.log(all_new_heros)

//Both .concat and spread works the same way.

const someArray = [1,2,3,[4,5,6,[7,8,9,[3,4]]]]
const realArray = someArray.flat(Infinity)
console.log(realArray)

//Here we created a new array from lots or arrays.

console.log(Array.isArray("Amrit Ranjan"))  //Here we checked if "String" is array or not.
console.log(Array.from("Amrit Ranjan"))    //Here we converted string to array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
//Here we converted more than on variables to array.