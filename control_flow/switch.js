// Syntax of switch case
// switch (key) {
//     case value:
        
//         break;

//     default:    // if all of the case doesn't satisfy the condition the default is executed
//         break;
// }

// const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}


// if we don't add break keyword in each case then if any case is true after that all case will be executed without checking of condition except default case 