class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
    }

    displayInfo() {
        if (this.name === undefined && this.age === undefined && this.dateOfBirth === undefined) {
            return 'Вы не ввели никаких параметров для вывода информации!';
        } else if (this.name !== undefined && this.age === undefined && this.dateOfBirth === undefined) {
            return String(this.name)
        } else if (this.name !== undefined && this.age !== undefined && this.dateOfBirth === undefined) {
            return String(this.name + ',' + +this.age)
        } else if (this.name !== undefined && this.age !== undefined && this.dateOfBirth !== undefined) {
            return String(this.name + ',' + +this.age + ',' + this.dateOfBirth)
        }
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        let bufStr = '';
        if (this.salary !== undefined && this.department === undefined) {
            bufStr = super.displayInfo() + ',' + +this.salary;
            return bufStr
        } else if (this.salary !== undefined && this.department !== undefined) {
            bufStr = super.displayInfo() + ',' + +this.salary + ',' + this.department;
            return bufStr
        } else if (this.salary === undefined && this.department === undefined) {
            bufStr = super.displayInfo();
            return bufStr;
        }
    }
}


class Developer extends Employee {
    constructor(manager, salary, department) {
        super(salary, department);
        this.manager = new Manager;
    }
    setManager(changManager) {
        this.manager = changManager;
    }

}


class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.arr = [
            "Киркоров.А.З.,18,06.03.2000,125000,Департамент финансов",
            "Сидоров.Л.Ю.,19,20.08.1999,85000,Департамент финансов",
            "Дзюбец.Х.У.,21,19.08.1997,85000,Департамент финансов",
            "red"
        ];
    }

    addPers() {
        this.arr.push(super.displayInfo());
        console.log(this.arr);

    }

    delPers() {
        this.arr = _.without(this.arr, super.displayInfo());
        console.log(this.arr);
    }

}

