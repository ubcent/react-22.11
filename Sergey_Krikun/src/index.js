import {
  User
} from './user';

const user = new User('Vasya', 'Pupkin');
alert(user.sayHi());

// если нужно импортировать что то default то можно
// import User from '.user'; без фигурных скобках, а так в 
// фигурных указываем все классы и функции которые хотим импортировать
// через запиятую