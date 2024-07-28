const name = "Amrit"
const age = 24
const sex = "male"

if (name === "Amrit" && age === 20 && sex === "male"){
    console.log(`Welcome ${name}`)
}else{
    console.log("Check credentials please!")
}
/*
So, here we are checking some conditions using if function. so if condition is true
we can print our commands and if the function is false we can make else part executed.
*/

if (name === "Amrit" && sex ==="female"){
    console.log("Wrong user")
} else if(name === "Amrit" && age >= 20){
    console.log("Wrong user")
}else{
    console.log("User found")
}
/*
Here we learnt about some conditions and how we can check multiple conditions at
one go.
*/
    

