import './Menu.css';

import React, { Component } from 'react';
import classNames from 'classNames'; //плагин помогает составлять имя класса

export default class Menu extends Component {

  render() {

    const { items, place } = this.props;

    const menuClasses = classNames({
      'place-top-menu menu': place === 'top',
      'place-left-menu menu': place === 'left',
    })

    return (
      <ul className={menuClasses}>
        {items.map((item) => <li className="menu-item"><a href={item.href} className="menu-item__link">{item.title}</a></li>)}
      </ul>
    );
  }
}