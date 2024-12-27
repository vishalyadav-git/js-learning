// Singleton
// Object.create

// object literals
const mySyml = Symbol("Key1") 
const userDetail = {
    name: "Vishal",
    age : 20,
    email: "vishal@gmail.com",
    isLoggedIn: true,
    [mySyml]: "Key1",
}

// console.log(userDetail.age);
// console.log(userDetail);
// console.log(userDetail.name);
// console.log(userDetail["name"]);
// console.log(userDetail[mySyml]);
// console.log(typeof userDetail[mySyml]);
// console.log(userDetail);

userDetail.email = "vishal01@gmail.com"
// Object.freeze(userDetail)
userDetail.email = "vishalyadav@gmail.com"
// console.log(userDetail);

userDetail.myFunction = function(){
    console.log(`Hello Mr.${userDetail.name} your Email is ${userDetail.email}`); 
}

console.log(userDetail.myFunction());
