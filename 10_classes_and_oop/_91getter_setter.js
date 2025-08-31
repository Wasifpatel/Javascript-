class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

/*Without getters/setters → direct access.
With getters/setters → controlled access (validation, transformation, hiding, etc.).

That’s why even though “it works without them,” they’re powerful when you need control and abstraction.
*/