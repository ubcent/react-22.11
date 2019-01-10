import './ContactsPage.css';
import React, {PureComponent} from 'react';
import Header from 'components/Header';
import Menu from 'components/Menu';

export default class ContactsPage extends PureComponent {
  render(){
    return(
	  <div className="ContactsPage">
	    <header>
          <Menu />
        </header>
	    <ul>
	      <li>Телефон: 8(495)-111-11-11</li>
	      <li>E-mail: cuptrian@mail.ru</li>
	      <li>Адрес: г.Москва, Большой Козельский переулок, д.10</li>
	    </ul>
	  </div>
    );
  };
};