// Syntax of for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Nested for loop
for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + ' = ' + i*j );
   }
}

// ----------->>>  break and continue <<<----------- //

// break is used to skip the further iterations of loop if the given condition is matched

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        break
    }
//    console.log(`Value of i is ${index}`);
    
}

// continue is used to skip that particular iteration and move on to the next iteration for the given condition
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue
    }
//    console.log(`Value of i is ${index}`);
    
}