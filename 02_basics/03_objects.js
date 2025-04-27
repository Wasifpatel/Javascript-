//singleton : with help of constructor 
// Object.create

// object literals
const mySym = Symbol("key1")   //*****/

const JsUser = {
    name: "Wasif",
    "full_name": "Wasif Patel",   //*****/
    age: 21,
    email: "wasif@google.com",
    isLoggedIn: true,
    [mySym]: "secreat"    //*****/
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["full_name"]);
console.log(JsUser[mySym]);

// Object.freeze(JsUser)    //*****/
// JsUser.name = "Vaibhav"   
// console.log(JsUser);

JsUser.greeting = function () {
    console.log("hello guys");  
}
JsUser.greeting2 = function () {
    console.log(`Hello guys ,${this.name} here`);  
}
JsUser.greeting();
JsUser.greeting2();
console.log(JsUser);
