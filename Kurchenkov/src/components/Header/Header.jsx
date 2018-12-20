import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';

import Menu from '../Menu';

const items = [
    {title: 'Home', href: '/' },
    {title: 'News', href: '/news' },
    {title: 'Blog', href: '/blog' },
];

export default class Header extends Component {
    //статическое свойство класса
    static defaultProps = {
        size: 'big',
    }

    render(){
        const { size, color } = this.props;

        const headerClasses = classNames({
            //перечислим имена классов и условия для из подключения

            //true означает, что класс применяется всегда
            header: true,
            'header-small': size === 'small',
            'header-big': size === 'big',
        });

        return(
            <header className={headerClasses}>
                <Menu items={ items } />
            </header>
        )
    }
}