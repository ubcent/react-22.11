import User from './user';
import Today from './date';

window.onload = () => {

  const user = new User('Vasya', 'Pupkin');
  alert(user.sayHi());

  const author = new User('Boris', 'Lisichkin');
  author.getAuthor();

  const date = new Today();
  const button = document.getElementById('button');
  button.onclick = () => date.addDate();

};