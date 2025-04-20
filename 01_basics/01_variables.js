const accountId = 12345
let accountEmail = "wasifxyz@gmail.com"
var accountpassword = 1234556
accountcity = "Kolhapur"
let accountstate;

// accountId = 2 not allowed

accountEmail = "xyz@gmail.com"
accountpassword = 9876
accountcity = "Banglore"
console.log(accountId);
/*
    Prefer not to use var in code
    Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountpassword, accountcity, accountstate])

/*
Feature | var | let
Scope | Function-scoped | Block-scoped (inside {})
Hoisting | Yes (hoisted to the top, initialized as undefined) | Yes (hoisted but not initialized)
Re-declaration | Allowed within the same scope | ❌ Not allowed within the same scope
Global object | Adds to global object (window.varName) | ❌ Doesn’t add to global object
*/