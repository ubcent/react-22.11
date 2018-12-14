import './Header.css';

import React, {Component} from 'react';


import Menu from '../Menu';


export default class Header extends Component {
    render() {
        return (
            <header >
                <div className="header">
                    <Menu />
                </div>
            </header>
        )
    }
}