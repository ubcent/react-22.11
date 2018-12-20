import './MenuLogo.css';
import React, {Component} from 'react';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <ul className="logo-menu">
                    <li><a href="#">Journal</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        );
    }
}