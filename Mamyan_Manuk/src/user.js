import './style.css';

export class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHi() {
        return `${this.firstName} ${this.lastName}`;
    }
}