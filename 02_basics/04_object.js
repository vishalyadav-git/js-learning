const obj = new Object() //Singleton Object
// console.log(obj);

const user = {
    email:"vishal@gmail.com",
    name:{
        fullName:{
            firstName:"Vishal",
            lastName:"Yadav",
        }
    }
}
// console.log(user.name.fullName.firstName);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}

const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const newObj = {...obj1,...obj2}
console.log(newObj);


const newUser = [
    {
        email:"123@gmail.com"
    },
    {
        email:"123@gmail.com"
    },
    {
        email:"123@gmail.com"
    },
    {
        email:"123@gmail.com"
    },
]
// console.log(newUser[2].email);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty("email"));

// Object Destructuring 

const {firstName:name} = user
console.log(name);

// JSON

// {
//     "name": "vishal",
//     "age": 20,
// }

// [
//     {},
//     {},
//     {},
// ]