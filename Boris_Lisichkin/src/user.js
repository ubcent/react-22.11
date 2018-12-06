import './user.css'
export default class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hi, ${this.firstName} ${this.lastName}`;
  }

  getAuthor() {
    const authorName = document.getElementById('author');
    return authorName.innerHTML = `<h2 class="name">${this.firstName} ${this.lastName}</h2>`;
  }
}