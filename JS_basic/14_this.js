const profile = {
    name: "Amrit",
    age : 24,
    sex: "male",
    welcomeMessage: function (){
        console.log(`Hi ${this.name}, welcome to website your current age is ${this.age} and you are ${this.sex}.`)
    }
}
profile.welcomeMessage()
profile.name = "Gunjan"
profile.age = 22
profile.sex ="female"
profile.welcomeMessage()

/*
So, here we used this function which works with current context, that means when we
changed the profile from one name to another our context changed and so this function 
helped us to print out value although our welcome message function was for some other
profile.
*/


//Now, we are going to learn about arrow function.
function addNumbers(x,y){
    return x + y
}
console.log(addNumbers(12,17))

//Here we define a simple function to add numbers, now we can also write this code in much simpler way.

const addNum = (x,y,z) => x + y + z       //and that's it.
console.log(addNum(12,8,10))

//Main use case of arrow function is to reduce the efforts of writing codes.
