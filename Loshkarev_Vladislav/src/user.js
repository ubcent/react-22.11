import './user.css';
export class User {
    constructor(firstName, lastName, thirdName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.thirdName = thirdName;
    }
    sayHi(){
        return `Developer, ${this.lastName} ${this.firstName} ${this.thirdName}`;
    }
}