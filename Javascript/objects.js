const profile={
    name: "Amrit Ranjan",
    age: 24,
    email: "amritranjan@google.com",
    mobile: +919876543210,
    isLoggedIn: true,
    "newName": "Ajit"

}
 
console.log(profile)
console.log(typeof profile)

// There are two type to derive the values from objects
console.log(profile.email)
console.log(profile["newName"])

profile.email = "ajit@google.com"

console.log(profile.email)     //Here we can also change the value from objects.
//Object.freeze(profile)   //Here we have freezed the object so no change can be done by anyone.
//profile.name = "Amrit"
//console.log(profile.name)  // Here name is not changed to Amrit.

profile.greeting = function(){
    console.log(`Hello ${profile.name}, welcome to Javascript learning program.`)
}
console.log(profile.greeting())
//Here we defined a greeting function and executed our plan.

const tinderUser = new Object ()
tinderUser.name = "Amrit Ranjan "
tinderUser.userId = "2amritranjan"
tinderUser.isLoggedIn = false
tinderUser.details = {
    firstName: "Amrit",
    lastName: "Ranjan",
    email: "amrit@google.com"
}
console.log(typeof tinderUser)
console.log(tinderUser.details.email)
// Here we access the email of tinderUser from details section.

tinderUser.greeting = function (){
    console.log(`Hey ${tinderUser.details.firstName} your email is ${tinderUser.details.email}`)
}
console.log(tinderUser.greeting())

const newObject ={...profile, ...tinderUser, ...tinderUser.details}
console.log(newObject)
   
//Here we created new objects from existing objects.