// ++++++++++++++++++++ Use of this keyword ++++++++++++++++++++ //
// -> this is used for the context in which it's applied

const user = {
    username: "Maaz",
    age : 24,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to our website`);   // here this is used to access the context of curly braces in user object
        console.log(this);  // Output -> {
                            //  username: 'Maaz',
                            //  age: 24,
                            //  welcomeMessage: [Function: welcomeMessage]
                            //  } 
    }
}
user.welcomeMessage()

user.username = "Ahmad"
user.welcomeMessage()
