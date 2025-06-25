const myNums = [1,2,3]

const myTotal = myNums.reduce( function(accumulator , currval){
    console.log(`acc : ${accumulator} and curr : ${currval}`);
    return accumulator + currval;
},0)


// const myTotal = myNums.reduce( (acc, curr) =>acc+curr ,0 )

console.log(myTotal);




const clothes = [
    {
      cloth: "T-Shirt",
      price: 400
    },
    {
      cloth: "Jeans",
      price: 800
    },
    {
      cloth: "Jacket",
      price: 1200
    },
    {
      cloth: "Sneakers",
      price: 1600
    }
];

const myprice = clothes.reduce( (acc ,item) => acc + item.price, 0 )
  
console.log(myprice);

// accumulator: stores the running total or result

// currentValue: the current item in the array

// initialValue: starting value for the accumulator




  
