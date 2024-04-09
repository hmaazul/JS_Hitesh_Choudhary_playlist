//declaring a singleton objects
const fb = new Object()
//declaring an object literals
const snapUser = {}

// console.log(fb);
// console.log(snap);

// adding key and their values into objects
snapUser.id = "1234abc"
snapUser.name = "Maaz"
snapUser.isLoggedIn = false

// console.log(snap); // => { id: '1234abc', name: 'Maaz', isLoggedIn: false }

// nested objects
const user = {
    email: "xyz@gmail.com",
    username: {
        fullname: {
            firstName: "Maazul",
            lastName: "Haque"
        }
    }
}

// console.log(user.username.fullname.firstName); //=> Maazul


//merging or combining of an object
const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {
    5: "a",
    6: "b"
}

// const obj4 = { obj1, obj2}  // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }   //not a good method

// const obj4 = Object.assign(obj1, obj2, obj3) 

// here the value is being assigned to obj1 rather than obj4 so we must put an empty objects here
// const obj4 = Object.assign({}, obj1, obj2, obj3)  //here target is this {} where all merging is being done


// console.log(obj4);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1);  //{ '1': 'a', '2': 'b' } 


//spread operator for spreading and then merging 
const obj4 = {
    ...obj1,
    ...obj2,
    ...obj3
}
// console.log(obj4);

// declaring an array of objects
const generalUsers = [{
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    },
    {
        id: 3,
        email: "pqr@gmail.com"
    }
]

// console.log(generalUsers[1].email);  // => xyz@gmail.com


// console.log(snapUser);

// to know the keys present in object
// console.log(Object.keys(snapUser));   //=> [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(snapUser));  //=> [ '1234abc', 'Maaz', false ]
// console.log(Object.entries(snapUser));  //=>  [ [ 'id', '1234abc' ], [ 'name', 'Maaz' ], [ 'isLoggedIn', false ] ]

// console.log(snapUser.hasOwnProperty('isLoggedIn'));  // => true bec this key is presnt in the given object


// --------------- De-Structuring of Object --------------- //

const course = {
    courseName: "Chai aur JS",
    price: 999,
    courseInstructor: "Hitesh Choudhary"
}

// console.log(course.courseInstructor);

//  To avoid using via dot notation we can simply de-structure the object
const {courseInstructor} = course
// console.log(courseInstructor);

// also we can use like this
const {courseInstructor: instructor} = course
// console.log(instructor);

// --------------- API --------------- //

// declaring - its just like object
// {
//     "courseName" : " Chai aur JS",
//     "price" : 999,
//     "Instructor" : "Hitesh"
// }

// also it can be inside an array
// [
//     {},
//     {},
//     {}
// ]