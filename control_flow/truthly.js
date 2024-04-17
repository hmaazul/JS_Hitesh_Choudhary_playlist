const userEmail = []

if(userEmail){
    console.log(`Got user email`);
}
else{
    console.log(`Sorry not able to proceed`);
}

// Falsy value
// false, 0, -0, BigInt -> 0n (zero n), Nan, null ,undefined, "" (empty string)

// Truthly values
// "0",'false', "false", "  ", -> these are not empty string so these are truthly values
// [] (empyt array) , {} (empty object), function(){}

const user = []
if(user.length === 0){
    console.log(`Array is empty`);
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log(`Object is empty`);
}

// Nullish Coalescing Operator (??) : null undefined
// by using this we can escape the null/undefined values adn another flag/values 
let val1
// val1 = 5 ?? 10
// val1 = null ?? 5    
// val1 = undefined ?? 10
// val1 = null ?? 20 ?? 10   // here after null 1st value will be executed

// console.log(val1);



// Ternary operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")