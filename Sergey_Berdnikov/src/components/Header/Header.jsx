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
        const {size, color} = this.props;

        const headerClasses = classname({
            'header': true,
            'header-small': size === 'small',
            'header-big': size === 'big'
        });

        console.log(this.props);
        return (
          <header className={headerClasses}>
            <Menu items = {items}></Menu>
          </header>
        );
    }
};