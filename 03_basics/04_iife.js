// Immediately Invoked Function Expression (IIFE)
// In simple terms:
// 👉 It's a function that runs immediately after you define it.
// Basic Syntax:
(function sum() {
    console.log("IIFE executed!");
})();
  
// function() {} → You define a function.
// (function() {})() → You wrap it in parentheses and immediately call it with ().

// Why use an IIFE?

/*Avoid polluting the global scope.
Create private variables and private functions.
Useful when you want some code to run immediately but not stay in memory.*/

(() => {
    console.log("IIFE using arrow function!");
})();
  