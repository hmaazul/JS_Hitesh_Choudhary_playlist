// object through function

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })

    // same for password
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const chai = new User("haque@google.com","321abc")
console.log(chai.email);
console.log(chai.password);