import './Form.css';

import React from 'react';

export default function Form (props) {
  const { onInputLogin, onInputPassword } = props;

    return (
      <div className="Form">
        <form>
          <label htmlFor="login">логин: <input onInput={onInputLogin} className="loginInput" id="login" type="text"
            placeholder="введите логин: макс20симв" maxLength="20"/></label>
          <div id="errorName"></div>
          <label htmlFor="password">пароль: <input onInput={onInputPassword} className="loginPassword"
            id="password" type="password" placeholder="введите пароль: макс20симв" maxLength="20"/></label>
          <div id="errorPassword"></div>
          <div className="ButtonWrapper">
            <button className="enterBtn">Войти</button>
            <button className="regBtn">Регистрация</button>
          </div>
        </form>
      </div>
    )
  }