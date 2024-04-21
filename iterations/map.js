const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num) => {
//     return num + 10
// } )

// console.log(newNums);   // output -> [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

// Chaining -> map followed by map or filter

const newNums = myNums
                .map( (num) => num * 10 )
                .map( (num) => num + 1 )
                .filter( (num) => num > 30 );

console.log(newNums);

