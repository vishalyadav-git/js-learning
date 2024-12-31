// this only work in context of object and not with the function 
const user = {
    username: "vishal",
    email: "yadav@gmail.com",

   greet: function () {
        console.log(`${this.username}, welcome`);
        console.log(this);
        
    }
}
// user.greet()
// user.username = "yadav"
// user.greet()
// console.log(this);

const chai = function(){
    let username = "vishal"
    console.log(this.username);  
}
chai()

// Arrow Function () => {}

// const coffee = () => {

// }


// 1st Method To define Arrow Function  (Explicitly)

// const addTwoNumbers = (num1,num2) => {
//     return num1 + num2
// }
// console.log(addTwoNumbers(3,7));


// 2nd Method To define Arrow Function (Implicitly)
//  Mostly used in "react"

// const addTwoNumbers = (num1, num2) => (num1 + num2)     
// console.log(addTwoNumbers(1,9))