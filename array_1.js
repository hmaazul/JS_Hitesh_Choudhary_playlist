const people = [ "Maaz","Ahmad","Aadil" ];
const gadgets = [ "Computer", "Mobile", "Tab" ];

// people.push(gadgets)

// console.log(people);

const combined_arr = people.concat(gadgets)
// console.log(combined_arr);

const spread_combined_arr = [...people, ...gadgets]
// console.log(spread_combined_arr);

const new_arr = [1,2,3,[4,5],6,[7,[8,9]]];
// console.log(new_arr.flat(2));

// console.log(Array.isArray([1,2,3])); //check if it's array or not
// console.log(Array.from({name : "Maaz", age : 23}));  //Not able to convert into an array -- from converts to array

let amt1= 100, amt2 = 200, amt3 = 300
// console.log(Array.of(amt1,amt2,amt3))   // of- creates array of the given variables regardless of type of var
