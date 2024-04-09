function sayMyName(){
    console.log("Maaz");
}

// sayMyName()  //->function name is just reference and the paranthesis orders to execute


function addTwoNumbers(num1, num2){
    let result = num1+num2
    return result  // after return statement no code will be executed 
}

let result = addTwoNumbers(4,5)
// console.log(`The sum of two number is ${result}`)

function loginUserMessage(username = "Ahmad"){  //its a default given value    
    if(!username){    //if an undefined value is there so this code will execute
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("maaz"));
// console.log(loginUserMessage());   //empty paranthesis gives undefined value
// console.log(loginUserMessage(""));


//  ---------------------------------- Use of Rest Operator ----------------------------------------- //

function calculateCartPrice1(...number1){   // three dots represents rest operator it collects all the value passed as arguement and store it in an array
    return number1      
}

// console.log(calculateCartPrice1(200, 4000,5000,20,60930));   // number1 = [ 200, 4000, 5000, 20, 60930 ]

function calculateCartPrice2(val1,val2, ...number1){
    return number1   // here val1 = 200,  val2=4000, and rest of the value will goes in number1 = [ 5000, 20, 60930 ]
}
 
// console.log(calculateCartPrice2(200, 4000,5000,20,60930));   // number1 = [ 5000, 20, 60930 ]


// ----------------------------------- Objects in Function ----------------------------------------- //

const user = {
    username : "Maaz",
    email : "abc@gmail.com"    
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and his email is ${anyObject.email}`);
}

// handleObject(user)  // Username is Maaz and his email is abc@gmail.com
// handleObject({
//     username: "haque",
//     email : "xyz@google.com"
// })

// ---------------------------------- Array in Function ---------------------------------- //
const myNewArray = [200, 400, 500, 6000]

function printFirstValue( givenArray )
{
    console.log(givenArray[0]);
}

// printFirstValue(myNewArray)    // Output - 200