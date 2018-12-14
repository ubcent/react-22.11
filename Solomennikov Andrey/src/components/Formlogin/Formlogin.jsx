import './Formlogin.css';
import React, { Component} from 'react';


export default class Formlogin extends Component
{
    render() {
        return (
            <form className="form1" action="">
                <p><strong>Логин:</strong>
                    <input maxLength="25" size="20" name="login"/></p>
                <p><strong>Пароль:</strong>
                    <input type="password" maxLength="25" size="20" name="password"/></p>
                <p><input className="butt1" type="submit" value="Войти в систему"/></p>
            </form>
        );
    }
};