import {Human} from './user';


export class Author extends Human {
    constructor(firstName, lastName, age, className) {
        super(firstName, lastName);
        this.age = age;
        this.className = className;
    }

    _aboutMe() {
        return `Author - ${super.sayHi()}, ${this.age} years`;
    }

    renderAboutMe() {
        let div = document.createElement('div');
        div.textContent = this._aboutMe();
        div.className = `${this.className}`;
        document.body.appendChild(div);
    }


}