// for in loop on object
const myObject = {
    js: "JavaScript",
    rb: "Ruby",
    py: "python",  
}

for (const key in myObject) {
      console.log(`${key} is shortcut for ${myObject[key]}`);
        
    }

    // for_in loop on array
 const programming = ["js", "rb", "py","cpp"]   

 for (const key in programming) {
   console.log(programming[key]);
   
        
 }
 