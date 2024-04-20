const coding = ["js", "ruby", "java", "python", "cpp"]

const lang = coding.forEach( (item) => {
    return item
})

// console.log(lang);   // output undefined bec. it forEach it doesn't returrn anything 

// So to overcome this drawback we use filter 

// --------------------------------------- Filter --------------------------------- //
const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => {
//     return num > 3
// } )

// we can also return implicitly so we don't need to write return keyword
// const newNums = myNums.filter( (num) => num > 3 )

// console.log(newNums);     // [4, 5,  6, 7, 8, 9, 10]


// We can also perform this work in forEach by doing some alterations

const newNums = []

myNums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
} )

// console.log(newNums);


// Some examples of filter 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
  
let userBooks = books.filter( (sample) => {
    return sample.genre === 'Fiction'
} )

userBooks = books.filter( (sample) => {
    return  sample.publish > 1995 && sample.genre === 'History'
})

console.log(userBooks);