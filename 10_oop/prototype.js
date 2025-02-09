let user = {
    username: "Vishal",
    age: 20,

}
Object.prototype.greet = function(){
    console.log(`Hello from ${this.username}`);
    
}
user.greet()

let animal = ["cat", "dog"]

Array.prototype.sound = function (){
    console.log(`meow meow says ${this.username}`);
    
}
animal.sound()
// user.sound()  

// Old syntax for Inheritance

const human = {
    isQualified: true,
}

const Teacher = {
    isTeaching: true,
}

const staff = {
    isGraduate: true,    
}

const supportStaff = {
    isAvailable: true,
    __proto__: staff,
}

Teacher.__proto__ = human

// Modern Syntax
Object.setPrototypeOf(staff,Teacher)


let Name = 'Vishal    '

String.prototype.trueLength = function(){
    console.log(`${this.Name}`);
    console.log(`True length is :${this.trim().length}`);  
}
Name.trueLength()