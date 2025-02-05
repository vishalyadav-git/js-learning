const user = {
    username: 'Vishal',
    isLoggedIn: 'true',
    age: 19,

    getUserDetaii: function (){
        console.log(`username = ${this.username}`);
        
    }
}
// console.log(user);
// console.log(user.getUserDetaii());

function userInfo(username, age, isLoggedIn){
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;
}

const userOne = new userInfo("Vishal", 20, true)
const userTwo = new userInfo("Shiv", 19, false)
console.log(userOne);
console.log(userTwo);


