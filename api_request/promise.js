// promises is an object that are used to fulfill async operations


// creating promises
const promiseOne = new Promise(function(resolve, reject) {
    // here we can do asynchnorous task
    // ex - DB calls, cryptography task, network calls
    setTimeout(function(){
        console.log('Async task is done');
        resolve()   // this  is used to connect resolve and then by using resolve() method
    }, 1000)
})

// consuming promises
promiseOne
.then(function(){    // then is used when promise is resolved 
    console.log('promise resolved');
})

// We can also do this without storing promise in variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async 2 is done');
        resolve()
    }, 1000)
})
.then(function(){
    console.log('promise 2 resolved');
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({ username: "Maaz", email:"maaz@gmail.com" })
    },1000)
})

promiseThree
.then(function(user){
    console.log(user);
})

// reject case -->> Error Handling
const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(error){
            reject('Error: Something went wrong')
        }
        else{
            resolve({username:"Coffee", email:"maaz@chai.com"})
        }
    })
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
})
.then(function(username){
    console.log('Username is: ',username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => {
    console.log('The promise is either resolved or rejected');
})

// using async, await for Promises
const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(error){
            reject('Error: JS went wrong')
        }
        else{
            resolve({username:"Javascript", email:"js@google.com"})
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const promise = await promiseFive
        console.log(promise);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// fetching data 
// async function getAllUsers(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
// }

// getAllUsers()
// 1. here in the first then response is being returned in json format to the next then from there we can use the data 
// 2. we can use multiple then 
// 3. catch is for error handling 
fetch('https://api.github.com/users/hiteshchoudhary')
.then(function(user){
    return user.json()
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log(error);
})