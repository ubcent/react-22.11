import './user.css';

export class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.regExpName = /^[a-zа-яё\-]+$/ui;
  }

  sayUserName() {
    const userName = document.getElementById('user_name');
    if (this.isValidName()) {
      userName.innerHTML = `<p>Пользователь: ${this.firstName} ${this.lastName}</p>`;
    } else {
      userName.innerHTML = `<p> Неккоректное имя пользователя!</p>`
    }
  }

  isValidName() {
    return this.regExpName.test(this.firstName) && this.regExpName.test(this.lastName);
  }
}