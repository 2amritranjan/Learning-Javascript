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
Object.freeze(profile)   //Here we have freezed the object so no change can be done by anyone.
profile.name = "Amrit"
console.log(profile.name)  // Here name is not changed to Amrit.
