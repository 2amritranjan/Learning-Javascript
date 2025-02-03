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

const user =[
    {
        id: 1,
        password: 12345
    },
    {
        id: 2,
        password: 23456

    },
    {
        id: 3,
        password: 34567
    }
]
const newUser = user[1].password
console.log(newUser)

// Here we created an array of objects and printed the values using indexing.

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

/*
There is also a topic of de-structuring of objects where we can change
or manipulate the keys and use it accordingly to fetch values.
*/

/*.    +++++Talking abou JASON API+++++
{
"name": "Amrit Ranjan",
"email": "amrit@google.com",
"mobile": "8340397905"
}
This is example of JASON its basically a object only but its not 
stored in and variable.

Jason can be also inscribed in array [ ]
*/
