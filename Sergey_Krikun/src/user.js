// import "./user.css"
// сюда же импортируем css относящейся к этому модулю
export class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hi, ${this.firstName} ${this.lastName}`;
  }
}

// export нужен чтобы потом применить import в другом файле, если 
//мы знаем что будет только один эакспорт, например только
//одного класса то можно export default это упростит синтаксис imoprta