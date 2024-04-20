coding = ["Js", "Java", "Ruby","Cpp","Py"]


// in forEach arguement we have to pass callback function 
// callback function - it has no name
coding.forEach(function (val) {
    // console.log(val);
})

// arrow function also works
// coding.forEach( (item) => {
    // console.log(item);
// } )

// declared function also works
function print(item){
    console.log(item);
}

// coding.forEach(print)

// more functionalities
coding.forEach( (value, index, arr) => {
    console.log(value,index,arr);
} )