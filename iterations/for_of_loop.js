// For of Loop
// we can iterate over array, strings, map, etc using for of loop
// ["", "", ""]
// [{}, {}, {}]

// Syntax
// for (const iterator of object) {   // iterator -> it's used to take value from the given array, object -> put the name of array or map on which loop has to iterate
    
// }

// for of on Array
const myArr = [1,2,3,4,5]

for (const num of myArr) {
    // console.log(num);
}

// for of on Strings
const greetings = "Hello World!"
for (const greet of greetings) {
    // if(greet === " ") continue   // to skip the space 
    // console.log(greet);
}

// ------------->>>>>>  Maps  <<<<<<-------------- //
//  it doesn't take duplicate values

const myMap = new Map()
myMap.set('IND', "India")
myMap.set('UK', "United Kingdom")
myMap.set('Sri', "Srilanka")

// console.log(myMap);

for (const key of myMap) {
    // console.log(key);   // it returns both key and value in an array form
}
for (const [key, value] of myMap) {   // here we have de-structure the array which was returned in previous loop
    // console.log(key, '->', value);   
}


// for of on Object
// we can't use for of loop on objects 
const mySports = {
    sports1: 'Cricket',
    sports2: 'hockey'
}

for (const games of mySports) {
    console.log(games);   // mySports is not iterable
} 
