// primitive

// 7types - Number , String , Boolean , Null , Undefined , Symbol , BigInt

// Non-primitive (Reference)

// Array , Object , Function
const arr = ["ironman","spiderman","batman"]

let myobj = {
    name: "wasif",
    age: 21
}

const myfunc = function name(params) {
    console.log("Hello Guys");
}
myfunc();

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// ***************************************************************

// Stack(primitive) , Heap(Non-primitive)

// Stack me apko copy milta hai

let myyoutubename = "wasifcodinig"
let anothername = myyoutubename
anothername = "andrew tate"
console.log(myyoutubename);
console.log(anothername);

// heap me apko original value ka reference milta hai

let userOne = {
    name: "wasif",
    password: 123
}

let userTwo = userOne

userTwo.name = "siddesh"

console.log(userOne.name);
console.log(userTwo.name);



