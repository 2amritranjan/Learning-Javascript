const a = 10
let b = 12
var c = 20
//console.log(a)
//console.log(b)
//console.log(c)

//Here it's obvious that we can obtain values of a, b and c very easily.

{
    const number1 = 20
    let number2 = 25
    var number3 = 30
}
//console.log(number1)   //Here the values of number1 shouldn't get print.
//console.log(number2)   //Here the value of number2 shouldn't get printed.

console.log(number3)     //Here the value of number3 shouldn't get printed also but thats the catch.
/*
This var number3 doesn't follow scopes and can be printed outside the 
scope also which can create alot of confusion during multiple people 
working on same project, that is why var is not used during 
real life coding. Its just to understand that we can declare a variable 
using var and that's all.
*/
