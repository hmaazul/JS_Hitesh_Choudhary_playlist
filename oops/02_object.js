// Javascript has a prototypal behaviour - means it goes layer to layer until null to find the property known as Prototypal Inheritence
// Everything in js is an object so each has property of objects like- array, strings, functions


function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2  // here this is a function and we have added a dot notation in it bec. in Js function also acts as Object
// console.log(multiplyBy5.power);  // gives output as 2 just like object
// console.log(multiplyBy5(2));  // o/p -> 10
// console.log(multiplyBy5.prototype);  // gives empty object

// creating constructor function 
function createUser(username, score){
    this.username = username    // here this differentiate the username of current context and the argument username otherwise compiler will get confused
    this.score = score
}

// inserting function/methods in prototype of above constructor
createUser.prototype.incrementScore = function(){
    this.score++         // here this helps to identify that whose score we have to increment if chai called then increment chai or whoever
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.score}`);   //here also this identifies whose score to show 
}

// here if we not use new keyword then chai can't access printMe and other methods from prototype

// new keyword is the constructor which create an object and link objects to it's prototype
const chai = new createUser('Chai',25)  
const tea = new createUser('tea', 200)

console.log(chai.username)
tea.printMe()

// Note ->>> When we don't use new keyword then an object is not created so we can't access the properties also

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/