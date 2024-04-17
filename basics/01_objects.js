//Objects can be of two types => 
//1)Singleton  
//2)Literals

const mySym = Symbol("myKey")

const JS_user = {
    name: "Maaz",
    "full name" : "Maaz Ul Haque",
    age: 23,
    email: "maaz@google.com",
    isLoggedIn: "false",
    lastLoginDays: ["Sunday", "Friday"],
    [mySym] : "myKey2"
}

//we can access the property of object using dot and square brakcets
// console.log(JS_user[mySym]);  //gives the symbol of mySym
// console.log(JS_user["full name"]);  
// console.log(JS_user.lastLoginDays);

//changing the property of objects 
JS_user.name = "Ahmad"
// console.log(JS_user.name);

// Freezing the obejcts restricting to change the attributes of objects
// Object.freeze(JS_user)
JS_user.email = "ahmad@gmail.com"
// console.log(JS_user.email);


JS_user.welcome = function() {
    console.log("Salam user");
}



JS_user.wlcm_msg = function(){
    console.log(`Salam ${this["full name"]}`);
}
console.log(JS_user.wlcm_msg());