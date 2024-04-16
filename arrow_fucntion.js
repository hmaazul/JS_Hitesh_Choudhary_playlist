// ++++++++++++++++++++ Use of this keyword ++++++++++++++++++++ //
// -> this is used to refer the current context in which it's applied
// -> this only works for objects but not for functions


const user = {
    username: "Maaz",
    age : 24,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to our website`);   // here this is used to access the current context of curly braces in user object
        console.log(this);  // Output -> {
                            //  username: 'Maaz',
                            //  age: 24,
                            //  welcomeMessage: [Function: welcomeMessage]
                            //  } 
    }
}
// user.welcomeMessage()

// user.username = "Ahmad"
// user.welcomeMessage()

// console.log(this);  // {} -> it gives empty object in node environment as in curent context there is no global object but in case of browser it gives window objects as it's global object


// +++++++ this keyword in functions +++++++++ //
// 

function checkThis(){
    let username = "maaz"
    console.log(this.username);   // undefined   => this doesn't work inside functions
}

// checkThis()

const chai = function(){
    let username = "maaz"
    console.log(this.username);  //undefined
}
// chai() 

// same for arrow function


// ++++++++++++++++++++++++++++++ Arrow Function ++++++++++++++++++++++++++++++++++ //

// const addTwo = (num1, num2) => {
//     return num1+num2
// }


// ++++++ Implicit Return -> means we don't need to write return keyword...

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

// console.log(addTwo(4,5));

//return object from function -> use paranthesis () for that
const returnObject = () =>  ({username: "Ahmad"})

// console.log(returnObject());

// ---------------Conclusion
// if we use curly braces then we need to write return keyword but not in case of paranthesis