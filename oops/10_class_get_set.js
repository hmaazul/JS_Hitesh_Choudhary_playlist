class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()       // undersocre represents-->> it's different from the above getter and setter
    }
    set email(value){
        this._email = value
    }
}

const chai = new User("chai@fb.com","123")
console.log(chai.email);