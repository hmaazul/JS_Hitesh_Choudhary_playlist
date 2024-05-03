// for in works on objects, arrays, but not on Map

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);   // gives all the keys
    // console.log(`${key} is shortcut of ${myObject[key]}`);   // ${myObject[key]} = value of the given key
}

// On Arrays

const programming = ["Js", "Java", "Ruby","Cpp","Py"]

for (const lang in programming) {
    // console.log(lang);       // it gives the keys(index) of every value
    // console.log(programming[lang]);
}

// On Maps
// this doesn't works on Maps 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(map[key]);    // No output
}