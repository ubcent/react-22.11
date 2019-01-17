import './Nav.css';
import React, { PureComponent } from 'react';

export default class Nav extends PureComponent {

    render() {

        return (
            <div className="right_menu">
                <a href="#">MainPage</a>
                <a href="#">Блог</a>
                <a href="#">Комментарии</a>
                <a href="#">Пользователи</a>
                <a href="#">Pure Component</a>

            </div>

        )
    }
}