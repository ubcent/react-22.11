export class Component {
    constructor(buttName){

        this.buttName = "Вывод даты";
    }

    createButt() {
        const newButt = document.createElement('button');
        newButt.innerHTML = this.buttName;
        return newButt
    }
}