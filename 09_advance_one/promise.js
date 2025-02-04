// 1st promise
const promiseOne = new Promise(function(resolve, reject){
setTimeout(function(){
    console.log('Async has been complete')
    resolve()
},1000)
})

promiseOne.then(function(){
    console.log('promise consumed');
})

// 2nd Promise
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async 2 task');
        resolve()
        
    },1000)
}).then(function(){
    console.log('asyn resolved');
    
})

// 3rd Promise 
const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve({username : 'Vishal', age : '20'},1000)
   },1000) 
})
promiseThree.then(function(user){
    console.log(user);
    
})

// 4th Promise
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: 'Vishal', password : '321'})
        }else{
            reject('ERROR : Please Check Once Again')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => {
    console.log('Promise is either resolved or rejected');
    
})

// 5th Promise 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(() => { let error = true
        if (!error) {
            resolve({username: 'JavaScript', password : '321'})
        }else{
            reject('ERROR : Please Check JS Once Again')
        }},1000)
})

async function consumePromiseFive(){
    // const response = await promiseFive
    // console.log(response);
    try {
         const response = await promiseFive
         console.log(response); 
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()

// fetch()

async function getUserId(){
    try {
        const response = await fetch('https://api.github.com/users/vishalyadav-git')
        // console.log(response);
        const data = await response.json()
        console.log(data);
        
    } catch (error) {
        console.log('E:', error);
        
    }
}
 getUserId()