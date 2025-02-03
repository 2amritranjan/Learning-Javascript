// In JavaScript, memory is generally managed in two main types.
// 1.) Stack Memory => Used to store primitive values data types.
// 2.) Heap Memory => Used to store non primitive values of data types.


let score = 100
let newScore = score
newScore = 105
console.log(newScore)
console.log(score)
/*
*/
let EmployeeName = "Amrit"
let newEmp = EmployeeName
newEmp = "Ram"
console.log(EmployeeName)
console.log(newEmp)

/*
These two 'score' and 'EmployeeName' are examples of primitive data types
so the memory allocation of these two are in "Stack", so when we assign 
new values to variables we get original and new value seperately. But this
is not the case in "Heap".
*/

let details = {
    name: "Amrit Ranjan",
    age: 24,
    married: false
}
let newDetails = details
newDetails.age = 23
console.log(details)
console.log(newDetails)
/*
Here as we can see the "age" variable changed in both "details"
and "newDetails" section. As we assign new value for "age" in "newDetails"
but it changed in "details" to because for non primitive data types the
memory allocation happens in "Heap".
*/
