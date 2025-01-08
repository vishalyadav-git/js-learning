const programming = ["ruby", "cpp", "html", "js", "java"]

programming.forEach( function (item) {
    // console.log(item);
    
} )

// for each on arrow function
programming.forEach( (item) => {
    // console.log(item);
    
})

function printIt(item){
    // console.log(item);
    
}

programming.forEach(printIt)

const myProgram = [
    {
        language: "python",
        filelang: "py",
    },
    {
        language: "java",
        filelang: "java"
    },
    {

    },
]

myProgram.forEach( (item) => {
    console.log(item.language);
    
    
})