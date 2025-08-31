const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);      
        console.log(this);
    }

}



console.log(user.username)
console.log(user.getUserDetails());
console.log(this);
/*JavaScript first looks for a variable called username in the current scope (local variables inside the function).
If it doesn’t find it, it looks outward: function scope → block scope → global scope.
Since username is only defined as a property of the object and not as a standalone variable in any scope, JS cannot find it.
That’s why you must use this.username → it explicitly refers to the property inside the object where the method is running.*/

// Think of this like saying “inside this object, look for the property”.
// Without this, JS assumes you’re talking about a separate variable, not the object’s property.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

// new is a constructor function 
// it make multiple instances from same object