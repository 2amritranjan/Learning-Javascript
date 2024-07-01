const Employee_Id = 537792
let Employee_Email = "employee@google.com"
var Employee_Password= "123@Abcd"
Employee_Name = "Amrit Ranjan"



//Employee_Id = 537793   (it is not allowed)





//let Employee_Email = "newemail@google.com" (we can not re-declare let)
Employee_Email ="emp@google.com"



var Employee_Password = "Abcde@1234" /*(We can re-declare var) */




Employee_Name = "Ajit Kumar"



console.table([Employee_Id, Employee_Email, Employee_Password, Employee_Name])


/*
please don't use Var
because of issue in block scope and functional scope
which we will read later.
*/


console.table(typeof[Employee_Id, Employee_Email, Employee_Password, Employee_Name])
