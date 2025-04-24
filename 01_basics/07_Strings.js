const name = "wasif" // this is primitive string 
const repoCount = 50

console.log(`Hello my name is ${name} and my repository count is ${repoCount}`)
console.log(name.toUpperCase()); // JavaScript temporarily wraps the primitive string in a String object from the heap (a non-primitive).


function wordPuzzle(name , repoCount) {
    console.log(`Hello my name is ${name} and my repository count is ${repoCount}`)
}

wordPuzzle(name , repoCount)

const gameName = new String('wasif-coding') // this is String object . 

console.log(gameName.length)
console.log(gameName.replace('-','$'))

// String is IMP for backend. There are so many methods that can be called on strig.
