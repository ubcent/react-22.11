import {Component} from './Component'

export class Render {
    constructor(item1, item2, item3, vacancy){
        this.item1 = item1;
        this.item2 = item2;
        this.item3 = item3;
        this.vacancy = vacancy;

    }
    render(){

        let newLi = document.createElement('li');
        newLi.innerHTML = `${this.vacancy} ${this.item1} ${this.item2} ${this.item3}`;
        return newLi
    }

    renderButt() {
        let butts = new Component ("Вывод Даты");
        return butts.createButt;
    }

}