const name = "vishal"
// console.log(name);

const nameIs = new String('Vishal')
// console.log(nameIs);

let nameOne = "vishal "
let nameTwo = "Yadav"

let final = nameOne + nameTwo
// console.log(final);

// console.log(`My first name is ${nameOne} and my last name is ${nameTwo}`);

// console.log(nameOne.__proto__);
// console.log(nameOne.length);
// console.log(nameOne.toUpperCase());
// console.log(nameOne.indexOf("l"));
// console.log(`${nameOne.toUpperCase()}${nameTwo}`);

const newName = "VishalYadav"
// console.log(newName.trim());

const newString = newName.substring(0,5)
console.log(newString);

const oldString = newName.slice(-7,5)
console.log(oldString);

const email = "yadav@gmail.com"
console.log(email.replace('@','-'));

console.log(email.includes(".com"));

const names = "vishal-yadav-@-gmail-com"
console.log(names.split('-'));


