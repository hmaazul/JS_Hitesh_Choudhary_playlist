// Javascript has a prototypal behaviour - means it goes layer to layer until null to find the property

let myName = "Maaz   "

// console.log(myName.length);   //this gives length of string

// if we want to get the actual length of string excluding spaces like we want to introduce new method like below
// console.log(myName.trueLength);

// we have to inject our own methods in prototype

let myHeros = ["hulk","spiderman"]

let heroPower = {
    hulk: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);    //this denotes the current context spiderman declared above in this object
    }
}

//injecting our own methods in Object
Object.prototype.Check = function(){
    console.log(`This method is present in all objects`);
}

Array.prototype.arrCheck = function(){
    console.log(`Only array methods`);
}

// heroPower.Check()  //check is present in objects method
// myHeros.Check()  // check is also accessible by array bec. array also passes through objects

// check array injected methods
// myHeros.arrCheck()
// heroPower.arrCheck()  // this gives error as object can't access array methods but array can access objects method


// Inheritence -->> To access properties of another object in a given object through proto
const User = {
    name: "Chai",
    email: 'chai@yahoo.com'
}
const  Teacher = {
    subject: "JS"
}

const TeachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__: TeachingSupport   // inheriting property of TeachingSupport
}

Teacher.__proto__ = User  // nheriting property of User in Teacher

// Modern Syntax - it's just syntax change but behind the scene __proto__ method is working

// inheriting property of Teacher in TeachingSupport
Object.setPrototypeOf(TeachingSupport, Teacher)  


// The first problem of trueLength property

let company = "ChaiAurCode    "

// as company is string so we'll set propert in string object directly
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`The actual length is ${this.trim().length}`); 
}

company.trueLength()
"Maaz".trueLength()