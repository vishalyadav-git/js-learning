// if
const userName = "vishal" 
if(userName.length > 0){
    console.log(`Your name is ${userName}`); 
}

// if_else
const score = 200
if (score < 200) {
    console.log("score is less then 200");
    
} else {
    console.log("score is greater then or equal to 200");
     
}

// nested if_else
const balance = 1000

if(balance < 500){
    console.log("balance is less than 500");
    
} else if (balance < 750) {
    console.log("balance is less than 750");
      
} else {
    console.log("balance is equal or greater than 1000");
    
}

// And Or Operator
const userLoggedIn = true
const userAge = 18
const TC = false
if (userLoggedIn == true && userAge >= 18 || TC==true) {
    console.log("Welcome to Channel");
    
}else{
    console.log("Please check ur age");
    
}