let score = "33"

console.log(typeof score)

let valueInNumber = Number(score)

console.log(typeof valueInNumber) 
/*
This is example of explicit type
conversion, where you have to manually 
convert the values.
*/

/*
But Js automatically converts some values
on its own. Known as Implicit type conversion.
*/

let run ="55" - 6; //adding string to number without conversion.
console.log(run);

/*
Here the new value of run is 49, it's proof that Js automatically converts some values.
*/

/*
Also for Addition one can not add + sign directly as 
The + operator in JavaScript has dual purposes: it can 
both add numbers and concatenate strings. When one of 
the operands is a string, JavaScript converts the other 
operand to a string and concatenates them. This is why 
implicit type conversion with the + operator does not 
convert strings to numbers but rather converts numbers 
to strings.
*/

let titleWin = Number("3") + 1 //here we have to convert string to number first.
console.log(titleWin)
console.log(typeof titleWin)


let age = "19abc"
let numberAge = Number(age)
console.log(typeof numberAge)
console.log(numberAge)
/*
Here we converted age which is a string to number,
which can not be converted as 19abc is not s valid number.
The problem here is age gets converted to number but if
we check the the converted age it shows its NaN(Not a number).
*/
// "33" => 33
// "33abc" => NaN
// null => 0
// undefined => NaN
// True/False => 1/0
