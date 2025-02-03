function myProfile(){
    console.log("name: Amrit")
    console.log("email: amrit@google.com")
    console.log("mobile: 8340397905")
    console.log("UserId: Amrit123")
}
myProfile()
//printed one times.
myProfile()
//printed two times.
myProfile()
// Here we printed my profile 3 times with so much ease.                                                       

function addTwoNumbers(numb1, numb2){
    console.log(numb1 + numb2)
}
addTwoNumbers(35,45)

function addNumbers(numb1, numb2){
    let result = numb1 + numb2
    return result
}
const result = addNumbers(12, 37)
console.log("result:", result)
/* Here both numbers are understood as Number and
not string or anything else, if we try to add (x + "y")
it will print xy and not x +y = z
*/
function isLoggedIn(username){
    return `${username} just logged in`
}
console.log(isLoggedIn("Amrit Ranjan"))
// Here we learned that simply return do not print any thing, we have to console.log that value.

function isLoggedIn(username){
    if(!username){
        console.log("Invalid User name")
        return
    }
    return `${username} just logged in`
}
console.log(isLoggedIn("Ajit"))

console.log(isLoggedIn(" "))
console.log(isLoggedIn(null))
/*
Here we learned to use if statemnt and use of ! for 
converting null and undefined value false so we can print
a invalid message.
*/
function calculateCartValue(...price){
    return price
}
console.log(calculateCartValue(150, 314, 419, 734,872))
//Here we used spread operator to calculate all the items added in cart, bht the values will be in form of Array.

//Let's understand from one more example
function myTotalMarks(maths, science, ...marks){
    return marks
}
console.log(myTotalMarks(87,72,85,61,91,59))

//So, here it will print only 85, 61, 91 and 59 because 87 goes for maths and 72 goes for science.

const courses = {
    name: "Javascript in hindi",
    price: 999,
    duration: "30 days"
}
function objectHandling (anyObject){
    console.log(`I have joined a course named ${anyObject.name} for ${anyObject.duration} and the price is ₹${anyObject.price} only.`)
}
objectHandling(courses)
//This was example of object handling through function.


//We can also handle arrays the way we handle object here through function.

let arrayProfile = ["Amrit", 24, "amrit123"]
function arrayHandling(anyArray){
    console.log (`Hi my name is ${anyArray[0]} i am ${anyArray[1]} years old and my userId is ${anyArray[2]}`)
}
arrayHandling(arrayProfile)

//Here function is done and now we will learn about scope like local and global scopes.
