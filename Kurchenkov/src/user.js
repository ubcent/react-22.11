import './user.css';

export class User{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return `Hi, ${this.firstName} ${this.lastName}`;
    }
}
