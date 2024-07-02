const User= {
    _email: "chai@ch.com",
    _password: "321abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const chai = Object.create(User)
console.log(chai.email);      // here by .email we are accessing get function of email so no need to add underscore

console.log(chai._password);   // here we need to add underscore bec. there is not get method named password so here we are accessing the property  "_password"
