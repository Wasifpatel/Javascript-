const coding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach( (item) => {
//     // console.log(item);
//     return item;
// } )

// console.log(value);

// NOTE: foreach forof forloop doesnt return values




const myNums = [1,2,3,4,5,6,7,8,9,10]

// ************METHOD 2  
// const NewNums = myNums.filter( (num) => num>4 )
const NewNums1 = myNums.filter( (num) => {
    return num>4
} )

// ************METHOD 2  
const NewNums2 = []
myNums.forEach( (num) => {
    if (num>4) {
        NewNums2.push(num)
    }
} )

console.log(NewNums2);





const books = [
    {
      bookname: "The Silent Patient",
      genre: "Thriller",
      edition: "1st"
    },
    {
      bookname: "Sapiens: A Brief History of Humankind",
      genre: "Non-fiction",
      edition: "2nd"
    },
    {
      bookname: "The Alchemist",
      genre: "Fiction",
      edition: "5th"
    },
    {
      bookname: "Clean Code",
      genre: "Programming",
      edition: "3rd"
    }
  ];
  
const mybook = books.filter( (bk) => bk.genre === "Programming" )
console.log(mybook);

  
