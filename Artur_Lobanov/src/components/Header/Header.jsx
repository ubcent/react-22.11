import './Header.css';

import React, { Component } from 'react';
import classNames from 'classnames';


import NavbarHeader from '../Navbar';

export default class Header extends Component {
    render(){
        console.log(this.props);//тут получили свойство объекта
        const { size } = this.props;

        const headerClasses = classNames({
            header: true,
            'header-small' : size === 'small',
            'header-big' : size === 'big'

        })
        return (
            <header className= { headerClasses }>
                <div className="container">
                <NavbarHeader />
                </div>
            </header>
        )
    }
}