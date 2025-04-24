let score = "33abc"

console.log(typeof score);

let isValueNumber = Number(score);
console.log(typeof isValueNumber);
console.log(isValueNumber);

// "33" => 33
// "33abc" => Nan
// true => 1; false => 0
// null => 0, undefined => Nan

let isLoggedIn  = "wasif"
let isValueBoolean = Boolean(isLoggedIn);
console.log(typeof isValueBoolean);
console.log(isValueBoolean);

// 1 => true; 0 => false
// "xyz"=> true; "" => false