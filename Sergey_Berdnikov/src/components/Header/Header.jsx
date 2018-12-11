import './Header.css';
//React импортируем в каждом файле
import React, { Component } from 'react';
import classname from 'classname';

import Menu from '../Menu';

const items = [
    {title: 'home', href: '/'},
    {title: 'news', href: '/news'},
    {title: 'about', href: '/about'},
];

export default class Header extends Component
{
    static defaultProps = {
        size: 'small',
    };
    render() {
        return (
          <header >
            <Menu items = {items}></Menu>
          </header>
        );
    }
};