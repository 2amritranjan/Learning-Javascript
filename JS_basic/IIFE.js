function connectionCheck(){
    console.log("Secure connection found.")
}
connectionCheck()
// This is a example of simple function but we have to manually execute this code by writing connectionCheck()
//IIFE stand for Immediately Invoked Function Expression, So we can execute this codes automatically.

(function newConnection(){
    console.log("Secure connection stablished.")
})();
//That's it, this code will be executed automatically.