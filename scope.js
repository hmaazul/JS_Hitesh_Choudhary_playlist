//  the curly braces {} are block scope


let a = 40   // this is global scope which is declared  outside of curly braces it can be accessed from anywhere

if (true) {
    let a = 10
    const b = 20
    // Don't use var
    // var c = 30  // var can be accessed anywhere so it's not bounded to any block

    // console.log("Inner:", a);  //Inner: 10
}

// console.log(a);  // 40
// console.log(b);
// console.log(c);

// ---------> let and const are scope bounded but var isn't
// ----- we can access global scope anywhere also inside curly braces


// --------------------------- Scope in Nested Function ------------------------------ //

// -> we can access parent variable in child but we can't acccess child's scope in parent or outside it

function one(){
    const username = "Maaz"

    function two(){
        const website = "twitter"
        console.log(username);
    }

    // console.log(website);    -----> Can't be accessed outside the scope

    two()
}

// one()


//  Same for if else condition

if(true){
    const username = "Maaz"
    if(true){
        const website = " Twitter"
        console.log(username + website);
    }

    // console.log(website);
}

// console.log(username);

// ++++++++++++++++++++++++++ Declaration of Function in different ways +++++++++++++++++++ //

console.log(addone(5))
function addone(num1){
    return num1+1
}


console.log(addtwo(7));  // we can't access expression function before its initialisation
const addtwo = function(num2){  //expression function
    return num2+2
}

