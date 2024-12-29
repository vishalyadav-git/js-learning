function username(name = "Vishal"){
   return `My Name Is ${name}`
}
// console.log(username());

function emailId(email = "yadav@gmail.com"){
    return `Your EmailId Is ${email}`
}
// console.log(emailId());

const newName = function(){
    console.log("Hello Vishal");
    
}
// console.log(newName());
// newName()

function name1(nameis){
    if (nameis === undefined) {
        console.log("please enter a name");
        return
    }
    if (nameis === "") {
        console.log("please enter some character");
        return
    }
    return `your name is ${nameis}`
}
// console.log(name1(""));
