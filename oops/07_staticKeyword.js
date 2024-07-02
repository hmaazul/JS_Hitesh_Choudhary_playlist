// Static prevent using the method/properties to the object instantiated from this class also to extended class
// we can only use the static method inside that class where it's being declared

class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){
        console.log(123);
    }
}

const chai = new User("chai")
chai.logMe()
// chai.createId()   // not accessed as this method is static

class Teacher extends User {
    constructor(username , email){
        super(username)      // calling the parent constructor bts->>> call, this passed.
        this.email= email
    }
}

const tea = new Teacher("Maaz", 'maaz@google.com')

tea.logMe()
tea.createId()     // not accessed as this method is static in parent class