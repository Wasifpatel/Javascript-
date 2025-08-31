const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

/*By convention, developers use a leading underscore (_property) to indicate:
👉 “This property is meant to be private/internal, don’t access it directly.”
*/