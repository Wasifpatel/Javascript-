const score = 400
console.log(score)

const balance = new Number(365)
console.log(balance);


console.log(balance.toString().indexOf("3"));
console.log(balance.toFixed(5));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// *************** MATHS *************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.3));
console.log(Math.max(4,5,6,7));
console.log(Math.min(4,5,6,7));

console.log(Math.random()); // 0< value <1

const min = 10;
const max = 20;

console.log(Math.floor((Math.random()*10 + 1 ) +min)); 
