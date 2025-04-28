let a = 900
const b = 700
var c =800
if (true) {
    let a =10
    console.log("inner : ",a);
    const b =20     // global scope value is available inside
    console.log("inner : ",b);
    var c =30      // but inside scope value shoundn't be available outside
    console.log("inner : ",c);

}
console.log(a);
console.log(b);
console.log(c);


function one() {
    const name = "wasif"
    function two() {
        const surname = "patel"
        console.log(name)
    }
    // console.log(surname);  // this is not valid
    
    two()
}
one()

// ******* two types of function declaration *****
console.log(addOne(5));
function addOne(num) {  
    return num +1;
}
//Before running the code, JavaScript does something called the "Hoisting phase".

// addTwo(5) // wrong
const addTwo = function (num) {
    return num +2;
}
