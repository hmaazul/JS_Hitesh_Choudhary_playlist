// IMMEDIATELY INVOKED FUCNTION EXECUTION
// This helps in executing function immediately also it helps in avoiding pollution from global variable
// i.e. if their is global variable available it may pollute/disturb the function as it's easily available to use
// to immediately execute it we put paranthesis at the end of defintion of function also we wrap the definition of function in paranthesis 
// Syntax

(function chai(){
    console.log(`Assalamualaikum`);
})();

// ()()  1st -> for wrapping definition and 2nd -> for execution

// for two iife function in a file we need to put semi-colon at the end of 1st iife


( () => {
    console.log("Alhamdulillah");
} )();

( (name) => {
    console.log(`My name is ${name}`);
} )("Maaz")