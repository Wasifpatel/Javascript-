
// for in for objects
const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}
// for in for array
const books = ["phy", "chem", "math"]

for (const key in books) {
    console.log(books[key]);
    
}

// for in for maps
const something = new Map()
something.set("IN" , "India")
something.set("USA" , "United States of America")
something.set("Fr" , "France")

for (const key in something) {
    console.log(key);
}

