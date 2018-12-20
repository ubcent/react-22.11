import './Header.css';
import React, {Component} from 'react';
import MenuLogo from 'components/MenuLogo';
import AlertMessage from 'components/AlertMessage';

export default class Header extends Component {
    render() {
        return (
            <header className="main-header">
                <AlertMessage />
                <div className="main-center">
                    <div className="nav">
                        <a target="_blank" href="https://radikal.ru" className="logo"><img src="https://a.radikal.ru/a36/1812/02/efca9c578d29.jpg" /></a>
                        <MenuLogo />
                    </div>
                </div>
            </header>
        );
    }
}