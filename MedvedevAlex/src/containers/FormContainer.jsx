import React, {PureComponent, Fragment} from 'react';

import Form from 'components/Form'


export default class FormContainer extends PureComponent {

  checkName() {
    const name = document.getElementById('login').value;
    if (/^[a-zа-яё0-9]{1,20}$/i.test(name)) {
      document.getElementById('errorName').innerHTML = '';
    } else if (name === '') {
      const errorNameEl = document.getElementById('errorName');
      errorNameEl.classList.add('errorColor');
      errorNameEl.innerHTML = "Заполните поле ввода имени";
    } else {
      const errorNameEl = document.getElementById('errorName');
      errorNameEl.classList.add('errorColor');
      errorNameEl.innerHTML = "Для ввода имени допустимы только буквы и цифры";
    }
  }

  checkPassword() {
    const password = document.getElementById('password').value;
    if (/^[a-zа-яё0-9]{1,20}$/i.test(password)) {
      document.getElementById('errorPassword').innerHTML = '';
    } else if (password === '') {
      const errorNameEl = document.getElementById('errorPassword');
      errorNameEl.classList.add('errorColor');
      errorNameEl.innerHTML = "Заполните поле ввода пароля";
    } else {
      const errorNameEl = document.getElementById('errorPassword');
      errorNameEl.classList.add('errorColor');
      errorNameEl.innerHTML = "Для ввода пароля допустимы только буквы и цифры";
    }
  }

  render() {
    return (
      <Fragment>
        <Form onInputLogin={this.checkName} onInputPassword={this.checkPassword}/>
      </Fragment>
    )
  }
}