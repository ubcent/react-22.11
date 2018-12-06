export default class Developer
{
    /**
     *
     * @param surname {string}
     * @param name {string}
     * @param patronymic {string}
     */
    constructor(surname, name, patronymic) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
    }

    /**
     *
     * @return {string}
     */
    whoiam() {
        return (`Developer: ${this.name} ${this.patronymic} ${this.surname}. You forgot?`);
    }
};