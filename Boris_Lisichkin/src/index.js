import User from './user';

window.onload = () => {

  const user = new User('Vasya', 'Pupkin');
  alert(user.sayHi());

  const author = new User('Boris', 'Lisichkin');
  author.getAuthor();

  function addDate() {
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} г.`;
  }

  const button = document.getElementById('button');
  button.addEventListener('click', () => {
    document.getElementById('date').innerHTML =addDate();
  })

};