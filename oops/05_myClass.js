// Creating class

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPswrd(){
//         return `${this.password}xyz`
//     }

//     changeUsernameCase(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('Maaz','maaz@gmail.com','abc321')

// console.log(chai.encryptPswrd()); 
// console.log(chai.changeUsernameCase());


// ------------   Working of the Class  ---------------
// Behind the Scence 

// we use function for creating object 

function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPswrd = function(){
    return `${this.password}xyz`
}

User.prototype.changeUsernameCase = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User('Ahmad','ahmad@gmail.com','321')

console.log(tea.encryptPswrd())
console.log(tea.changeUsernameCase());