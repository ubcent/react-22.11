import './Header.css';
import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <div className="main-center">
                    <nav className="nav">
                    <a target="_blank" href="https://radikal.ru" className="logo"><img src="https://a.radikal.ru/a36/1812/02/efca9c578d29.jpg" /></a>
                        <ul className="logo-menu">
                            <li><a href="#">Journal</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}