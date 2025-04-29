const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function(item) {
//     console.log(item);
    
// } )
coding.forEach( (item) => {
    console.log(item); 
} )

// function printMe(item) {
    //     console.log(item);
    // }
    
    // coding.forEach(printMe)  // here we gave refernce & didn't executed function : printMe()

    
coding.forEach( (item, index , arr) => {
    console.log(item, index, arr);  
} )

// *********array of objects******

const mycoding = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

mycoding.forEach( (item) => {
    console.log(item.languageName);
} )