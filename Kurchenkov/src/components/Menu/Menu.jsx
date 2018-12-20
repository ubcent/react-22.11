import './Menu.css';

import React, { Component } from 'react';


export default class Menu extends Component {

    render(){
        // приходит массив элементов
        const { items } = this.props;

        return(
            <ul>
                {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
            </ul>
        )
    }
}