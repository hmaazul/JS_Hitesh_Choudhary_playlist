let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toDateString()); //date as string with the name of the day
// console.log(myDate.toLocaleString()); // gives date and time in String
console.log(myDate.toLocaleDateString());   //gives date in local format like mm/dd/yy

// console.log(myDate.toString()); // gives date and time with local time-zone


// console.log(myDate.getDate());  //gives the day of the month like its 26th March
console.log(myDate.getDay());  //gives day of the week which starts from 0 like if its monday then it will give -> 1
//sunday -> 0, monday -> 1, tuesday -> 2

// console.log(myDate.getMilliseconds());

let newDate = Date.now();
// console.log(Math.floor(newDate/1000));

let createdDate = new Date(2024,2,27,12,26);  //(yy,monthIndex,date,hr,min)
// console.log(createdDate);

