export class Car{
    constructor(model, cost){
        this.model = model;
        this.cost = cost;
    }

    giveCar(){
        return `Car model is, ${this.model}; car cost is ${this.cost}`;
    }
}