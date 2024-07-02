// These area advanced or in-depth properties of Object which sometimes we can edit and also not

const description = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(description);

// console.log(Math.PI);
Math.PI = 4
// console.log(Math.PI); // after overriting value doesn't change bec. Math.pi writable prop is false and we can't change it

// // this will not work and gives error
// Object.defineProperty(Math,'PI',{
//     writable: true
// })


const chai = {
    name: "Lemon Chai",
    price: 200,
    isAvailable: true,

    orderChai: function(){
        console.log("Sorry! Chai not available, will get you back when it's available ");
    }
}

// console.log(chai);

for (let key in chai) {
    // console.log(`${key}: ${chai[key]}`);
}

// price of chai will not be displayed while looping
Object.defineProperty(chai, "price",{
    enumerable: false
})



// in this loop price will not be displayed as it's enumeration is disabled
for (let key in chai) {
    // console.log(`${key}: ${chai[key]}`);
}


// if we don't want to display function only properties then
for (let key in chai) {
    if(typeof chai[key] !== 'function'){
        console.log(`${key}: ${chai[key]}`);
    }
}