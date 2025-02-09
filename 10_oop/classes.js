class User {
    constructor(username,email,password) {
        this.username = username
        this.email = email
        this.password = password
    }

    passwordEnhance(){
        return`${this.password}abc`
        
    }
    changeToUpper(){
        return `${this.username.toUpperCase()}`
    }
}

const a = new User("Vishal","vishal@gmail.com","1234")
console.log(a.passwordEnhance());
console.log(a.changeToUpper());

