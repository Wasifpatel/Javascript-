const arr = [1,2,3,4,5]

// for (const element of object) { dont confuse with js object it is simple object
    
// }

for (const val of arr) { // it will automatically get the size of array
    // console.log(val);           
}

// MAPS
// no duplicate values all unique values

const something = new Map()
something.set("IN" , "India")
something.set("USA" , "United States of America")
something.set("Fr" , "France")

console.log(something);

// for (const key of something) {
//     console.log(key);
// }
for (const [key, value] of something) {
    console.log(key, ": ", value);
}


// for of for objects
const myObject = {
    "game1" : "NFS",
    "game2" : "Spiderman",
}

//objects cant be iterated in this way
// for (const [key, value] of myObject) {
//     console.log(key, ": ", value);
    
// }


// Use for...of when:
// You want to loop through values (not keys or indexes).

// You're working with iterable things: arrays, strings, maps, sets, etc.

// You want the ability to break, continue, or return.