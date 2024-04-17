// syntax
// if (condition) {
    
// } else {
    
// }

// logical operator
// < , >, <= , >= 
// ==  -> check the values only if it's true or not 
// ===  -> check the value as well as data type of both variables
// !==

// Scope
const score = 100

if(score <= 100){
    let power = "Class Representative"
    console.log(`Use the power of ${power}`);
}

// console.log(` Use power of ${power}`);  // Can't access power here as it's out of scope

// const balance = 1000

// if (balance > 500) console.log("test");  // implicit return no need to define scope just add semicolon at end

// Multiple Condition
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

// Use of And(&&) / Or(||)
// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if (userLoggedIn && debitCard && 2==3) {
//     console.log("Allow to buy course");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }