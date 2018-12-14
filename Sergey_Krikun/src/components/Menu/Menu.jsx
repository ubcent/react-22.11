import './Menu.css';

import React, { Component } from 'react';
import classNames from 'classNames'; //плагин помогает составлять имя класса





export default class Menu extends Component {

  render() {
    const { items, place, type,  } = this.props;

    const menuClasses = classNames({
      'place-top-menu menu': place === 'top',
      'place-left-menu menu': place === 'left',
    })
    
    const itemClasses = classNames({
      'menu-item': true,
      'icon-menu': type === 'icon',
    })




    return (

      <ul className={menuClasses}>
        {items.map((item) => <li key={item.key} className={itemClasses}><a href={item.href} className="menu-item__link">{item.title}</a></li>)}
      </ul>

    );
  }
}