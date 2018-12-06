import {
  User,
} from './user';

import DateButton from './date-button';

const user = new User('Sergey', 'Krikun');
let contentOfElem = 'Web developer - ' + user.fullDeveloperName;
user.createOutputElement(contentOfElem);

const dateB = new DateButton();
dateB.createButton();

// если нужно импортировать что то default то можно
// import User from '.user'; без фигурных скобках, а так в 
// фигурных указываем все классы и функции которые хотим импортировать
// через запиятую