let indian_Heros = ["Shaktiman","Baalveer","Krish"]
let american_Heros = ["Thor","Ironman","Batman"]
let cartoon_Heros = ["Bheem","Raju","Oggy"]

 indian_Heros.push(american_Heros)
//  console.log(indian_Heros);
//  console.log(indian_Heros[3][2]);
 
let allHeros = indian_Heros.concat(american_Heros)
// console.log(allHeros);

//console.log(...indian_Heros,...american_Heros,...cartoon_Heros);

let newArr1 = [1,2,3,[4,5,6,[7,8,9]]]
console.log(newArr1.flat(Infinity));

console.log(Array.isArray("Vishal"));
console.log(Array.from("Vishal"));

let score1 = 100
let score2 = 123
let score3 = 145

console.log(Array.of(score1,score2,score3));
