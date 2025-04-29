let username = [];

if (username) {
    console.log("logged in successfully");
    
} else {
    console.log("try again");
    
}

// falsy value :
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value : 
// "0", `false, " ", [], (), function(){}

if (username.length === 0) {
    console.log("Array is empty");
    
}

const emptyObj ={}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1);

// sometime we dont get direct reposnse from database we get values like
// null undefined so this operator is used to adjust cases in code