export class Developer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    present() {
        return `Разработчик: ${this.lastName} ${this.firstName}`;
    }
}

export function getData() {
    let today = new Date();
    return `${today.getDate()}.${today.getMonth()+1}.${today.getFullYear()}`;
}