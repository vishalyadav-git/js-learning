// for of  (Not on Object)

// for of on array
const myArray = [1,2,3,4,5]

for (const element of myArray) {
    // console.log(element);
    
}

// for of on string
const Name = "vishal yadav"

for (const element of Name) {
    // console.log(`Each Char of Name is ${element}`);
    
}

// Maps  (InOrder and Unique value )

const map = new Map()
map.set(1,"Happy")
map.set(2,"birthday")
map.set(3,"Vishal")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":- ",value);
    
}
