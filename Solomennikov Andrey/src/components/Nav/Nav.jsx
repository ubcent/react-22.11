import './Nav.css';
import React, { Component } from 'react';

export default class Nav extends Component {

    render() {
        return (
            <div className="right_menu">
                <a href="#">Главная</a>
                <a href="#">Статьи</a>
                <a href="#">Видео</a>
                <a href="#">Фотографии</a>
                <a href="#">Архив</a>
                <a href="#">Обратная связь</a>
            </div>

        )
    }
}