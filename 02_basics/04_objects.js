// const tinderUser = new Object() //singleton object
const tinderUser = {}

tinderUser.id = "1234";
tinderUser.name  = "wasif";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

const regularUser = {
    email: "wasif@gmail.com",
    name:{
        fullname:{
            firstname: "wasif",
            lastname: "patel",
        }
    }
}
// console.log(regularUser.name.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const database = [
    {
        name: "abc",
        password:123,
    },
    {
        name: "def",
        password:456,
    },
]
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("name"));

// **************** Object Destructuring ***********

const course = {
    cousername: "JS Tutorail",
    price: "999",
    courseDuration : "20hrs",
}

console.log(course.courseDuration)

const {courseDuration: time} = course //name changed

console.log(courseDuration)
console.log(time) // form this 2 only one name will work at a time

// *********** JSON API ***********

// {
//     "name": "wasif",
//     "email": "xyz@gmail.com",// thi s is JASON format object without name
//     "password": 1234,
// }

// this is JASON format object without name
// API also provide data in this format 

// sometimes we get API in array format

// [
//     {},
//     {},
//     {},
// ]

// Random JSON file : https;/randomuser.me

// JSON formatter : https://jsonformatter.org/