export class Stuff {
    constructor(familyName, firstName, additionalName) {
        this.familyName = familyName;
        this.firstName = firstName;
        this.additionalName = additionalName;
        this.position = "Веб-разработчик: ";
    }
    data_output() {
        return `${this.position} ${this.firstName} ${this.familyName} ${this.additionalName}`;
    }
}