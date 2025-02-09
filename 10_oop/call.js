function setUserMail(username){
    this.username = username
}

function createUser (username, email, password){
    // this.username = username
    setUserMail.call(this,username)
    this.email = email
    this.password = password
}

const a = new createUser("Vishal", "vishal@gmail.com", "123")
console.log(a);
