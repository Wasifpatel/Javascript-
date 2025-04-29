const myArray = [1,2,3,4,5];

for (let index = 0; index <= myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

// multipilcation table

// for (let i = 1; i <= 2 ; i++) {
//     for (let j = 1; j <= 10; j++) {
//         console.log(`${i} * ${j} = `+ i*j);  
//     }
    
// }
 
// break and continue

for (let i = 0; i < 10; i++) {
    if (i == 5 ) {
        console.log(`${i} detected`);
        continue;//break;
    }
    console.log(`value is ${i}`);

}