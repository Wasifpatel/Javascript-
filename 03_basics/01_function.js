function sayMyName(params) {
    console.log("wasif");
    
}
sayMyName()

// function addNum(a,b) {
//     console.log(a+b);
    
// }
// addNum(3,4)

function addNum(a,b) {
    let sum = a+b;
    return sum;
    console.log("wasif");
    
    
}
const result = addNum(3,4);
console.log("Result : ", result);

function userLoggedIn(username) {
    if (!username) {                   // it must be true to execute 
        console.log("Please enter a username");
        return
    } else {
        return `${username} just logged in`
    }
}
console.log(userLoggedIn("wasif"));

function CalculateaCartPrice(item1, item2, ...items) {
    return items
    
}
console.log(CalculateaCartPrice(200, 300, 400 ,500));

// using object in function
const user = {
    name: "wasif",
    password: 123,
} 
function print(anyobject) {
    console.log(`username is ${user.name} and password is ${user.password}`);
    
}
print(user);
