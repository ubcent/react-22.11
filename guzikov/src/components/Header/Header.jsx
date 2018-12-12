import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';
import Menu from '../Menu';

const items = [
    {title: 'Home', href: '/'},
    {title: 'News', href: '/news'},
    {title: 'Blog', href: '/blog'},
]

export default class Header extends Component{
    render() {
        const { size } = this.props;
        
        const headerClasses = classNames({
            header: true,
            'header-big': size === 'big', 
        })

        return (
            <header className="header">
                <Menu items={items} />
            </header>
        )
    }
}