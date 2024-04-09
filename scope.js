//  the curly braces {} are block scope


let a = 40   // this is global scope which is declared  outside of curly braces

if (true) {
    let a = 10
    const b = 20
    // Don't use var
    // var c = 30  // var can be accessed anywhere so it's not bounded to any block

    // console.log("Inner:", a);  //Inner: 10
}

console.log(a);  // 40
// console.log(b);
// console.log(c);