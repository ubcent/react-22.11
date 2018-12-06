import User from './user';

export class Developer extends User {
    constructor(firstName, lastName, middleName) {
        super(firstName, lastName);
        this.middleName = middleName;
    }

    sayHi(){
        return `${super.sayHi()} ${this.middleName}`
    }
}