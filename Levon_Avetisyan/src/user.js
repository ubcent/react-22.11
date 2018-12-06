import './style.css';

export class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    typeName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

