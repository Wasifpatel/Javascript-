const myArr =[1,2,3,4,"ironman","spiderman"]
// console.log(myArr);

const myArr2 = new Array(7,8,9)
console.log(myArr2);

myArr2.push("wasif")
console.log(myArr2);
myArr2.pop()  //it doesnt take parameter directly pop last element
console.log(myArr2);
myArr2.unshift("x")  
console.log(myArr2);
myArr2.shift()  
console.log(myArr2);

const newArr = myArr2.join()

console.log(myArr2);
console.log(newArr);

// ********** slice , splice ****************
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("Before" , myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("After" , myArr);
