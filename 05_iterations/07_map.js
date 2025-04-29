const myNum = [1,2,3,4,5,6,7,8,9,10];
 
const newNum = myNum.map( (kuchbhi) => kuchbhi>5)
// const newNum = myNum.map( (kuchbhi) => kuchbhi+10)
console.log(newNum);


// ********Chaining

const newNumber = myNum
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num>=40  )

console.log(newNumber);

// | Method  | Purpose                         | Output Length     | Returns New Array? |
// |---------|----------------------------------|--------------------|---------------------|
// | `map()`   | Transform each element           | Same as original   | ✅ Yes              |
// | `filter()`| Select elements based on a test | ≤ original length | ✅ Yes              |