import './Menu.css';
//React импортируем в каждом файле
import React, { Component } from 'react';
import classname from 'classname';


export default class Menu extends Component
{

    render() {
        const {items} = this.props;

        return (
          <ul>
              {items.map((item) =>
                <li>
                    <a href={item.href}>{item.title}</a>
                </li>
              )}
          </ul>
        );
    }
};