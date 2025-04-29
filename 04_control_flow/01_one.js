let userName = "wasif";

if (3 !=2) {   // condition must be true to execute
    console.log(`${userName} logged in successfully` );
    
} else {
    console.log("rewrite user Name");
    
}

// const balance = 500;
// if(balance>400) console.log("executed"), console.log("exectude2"); // Implicite scope 
// dont use
 
const userLoggedIN = true;
const userCreditcard = true;
const userPlacedOrder = true;
if (userLoggedIN) {
    console.log("welcome to store");
    
} if(userLoggedIN && userCreditcard) {
    console.log("would you like to pay with card");
    
} else {
    console.log("your order is placed");
    
}

// ternary opertor
// condition ? true : false
const coffeePrice = 100;
coffeePrice>80 ? console.log("less than 80") : console.log("greater than 80");

