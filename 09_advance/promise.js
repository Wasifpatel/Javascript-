const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async task complete ")
        resolve()
    },1000)
})

promiseOne.then(()=>{
    console.log("Async Confirmed");
    
})
// ***************************************
new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log("Async2 task started");
        resolve()
    },1000)
}).then(()=>{
    console.log("Async2 confirmed");
    
})
// ******************************************
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username : "wasif" , password : 12345})
    },1000)
}).then((user)=>{
    console.log(user);
    
})
// ***********************************************************
const promisefour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = false;
        if (!error) {
            resolve({username : "wasif" , password : 12345})
        }else{
            reject("Something went wrong")
        }
    },1000)
})

promisefour.then((user)=>{
    return user.username
})
.then((username)=>{
    console.log(username); 
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected ");
})
