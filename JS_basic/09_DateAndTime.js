let newDate = new Date()
console.log(newDate)
console.log(newDate.toLocaleTimeString())
console.log(newDate.toLocaleString())
console.log(newDate.toTimeString())
console.log(newDate.toString())
console.log(newDate.toISOString())
console.log(newDate.toJSON())

let name = "Amrit Ranjan"
let ChoosenDate = new Date(1998,10,16)
console.log(ChoosenDate.toDateString())
console.log(`Hi, my name is ${name} and my date of birth is ${ChoosenDate.toDateString()}.`)
