// objects
const user = {
    username: "Maaz",
    loginCount: 3,
    isLoggedIn: true,

    getDetails : function(){
        // console.log(username); //this will give error as it doesn't know which username to print -> so use this keyword
        // console.log(this.username);
        // console.log(this);  // gives the current context here it's user object
    }
}
// console.log(user.username);
// user.getDetails()
// console.log(this); //gives empty paranthesis as in current context there is nothing but in browser it will give window object


// this is being used as class(or blueprint) to construct objects
function UserDetails(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }
    return this
}

const userOne = new UserDetails("Ahmad", 2, false)  // new is used as constructor for a new object
const userTwo = new UserDetails("Anwar",4,true)

console.log(userOne);
console.log(userTwo.greeting())
console.log(userOne.constructor);