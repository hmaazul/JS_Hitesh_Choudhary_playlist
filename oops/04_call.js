// What is Call?
// Call passes current execution context to another function/object
// by using call we are passing current execution context "this" to another func. and getting back the reference of property set
function setUserName(username){
    this.username = username
    console.log("Called");
}

function createUser(username, email, password){
    // setUserName(username)  // 1. this call will not set username in this function but function setUsername is just referenced

    setUserName.call(username)  // this technically calls the function but no object and it's property is referenced back as all property is inside "this" of setUserName not createUserName and it vanished as function call is over

    setUserName.call(this, username) // here we pass this of setUserName so that we can referenced back the object property
    this.email = email
    this.password = password
}

// 1 isn't working bec. 

const chai = new createUser('chai','chai@apple.com',321)

console.log(chai);

