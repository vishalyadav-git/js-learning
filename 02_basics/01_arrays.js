let arr = new Array(1,2,3,4,5)
// console.log(arr);
// console.log(typeof arr);

let heros = ["Batman", "Spiderman", "ironman", "Shaktiman"]
// console.log(heros);

heros.push("Thor")
// console.log(heros);
heros.pop()
// console.log(heros);

// Shift and Unshift
heros.unshift("Thor")  //Pushed at "0th" index
// console.log(heros);

heros.shift()
// console.log(heros);

// slice and splice
let arr1 = [0,1,2,3,4,5]
console.log("A", arr1);

let newArr1 = arr1.slice(1,3)  //Duplicate of array and slice a part
console.log("B", newArr1);
// console.log(arr1);
let newArr2 = arr1.splice(1,3) //Manipulation in original array
console.log("B",newArr2);
console.log(arr1);




