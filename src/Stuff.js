export class Stuff {
    constructor(familyName, firstName, additionalName) {
        this.familyName = familyName;
        this.firstName = firstName;
        this.additionalName = additionalName;
    }
    data_output() {
        console.log (`Веб-разработчик: ${this.firstName} ${this.familyName} ${this.additionalName}`);
        return `Веб-разработчик: ${this.firstName} ${this.familyName} ${this.additionalName}`;
    }
}