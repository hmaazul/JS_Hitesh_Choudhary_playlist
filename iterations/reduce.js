// Reduce is used to calculate the total value of the array with the given initial value

const myNums = [1,2,3,4]

// const initialVal = 0
// const myTotal = myNums.reduce( function (acc , currVal) {
//     console.log(`Accumulator: ${acc} and Current Value: ${currVal}`);
//     return acc + currVal
// }, initialVal )    // here 0 is the initial value given for accumulator to start with we can give any value as per our requirement 

const myTotal = myNums.reduce( (acc, currVal) => acc + currVal, 0)

// console.log(myTotal);


// Example
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(`Amount  Payable : ${totalPrice}`);