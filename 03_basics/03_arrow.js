const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
} 

// this refer to current context 
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); 
// it return empty object due to node
// in browser engine it return window



// function chai() {
//     let username = "wasif"
//     console.log(this.username);  // this is not working in function and works in object
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1+num2;
// }

// const addTwo = (num1, num2) => num1+num2  // Implicite return
// const addTwo = (num1, num2) =>( num1+num2 ) // Implicite return
const addTwo = (num1, num2) =>( {username : "wasif"} ) // Implicite return

console.log(addTwo(3,4));

