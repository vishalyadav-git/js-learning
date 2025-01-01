const userName = []

if(userName){
    console.log(`Hello ${userName}`);
    
}else{
    console.log("Please enter a userName");
    
}

// falsy value

// null , undefined, 0, -0 , false, BigInt 0n, "", NaN

// truthy value

// [], {}, " ", truth, "0", "false", function(){}

// if(userName.length === 0){
//     console.log("array is empty");
    
// }

const userEmail = {}
if(Object.keys(userEmail).length===0){
    console.log("object is empty");
    
}

// Nullish coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 20
console.log(val1);

// Ternary Operator

// condition ? true : false

const teaPrice = 20
teaPrice >= 20 ? console.log("equal or greater than 20") : console.log("less than 20");

