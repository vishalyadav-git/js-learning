// Function With Array Parameter
const arr1 = [200,300,400]

function valueFromArray(getValue){
   return getValue[1]
}
console.log(valueFromArray(arr1));

// function with object parameter
const obj1 = {
    email: "vishal@gmail.com"
}
function getObject(getName){
    return `your email id is ${getName.email}`
}
console.log(getObject(obj1))