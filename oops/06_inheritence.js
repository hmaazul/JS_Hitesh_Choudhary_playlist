//  extend keyword is used for inheritence in Class
class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username,email,password){
        // to set username we use super keyword - this calls the constructor of parent class
        // bts is same call is invoked and this is passed for reference
        super(username)
        this.email = email
        this.password = password
    }

    viewSubject(){
        console.log(`${this.username} teaches Physics`);
    }
}

const chai = new Teacher("Chai",'chai@google.com','123')

chai.viewSubject()
chai.logMe()

const tea = new User('Tea')
tea.logMe()
// tea.viewSubject()  // its not being accessed by user


console.log(chai === tea);  // false
console.log(chai instanceof Teacher); //true
console.log(chai instanceof User);  // true