import './Header.css';

import React, {Component} from 'react';

import Menu from 'components/Menu'

const items = [
  {title: 'Home' ,href: '/'},
  {title: 'PlayStation' ,href: '/playStation'},
  {title: 'Nintendo' ,href: '/nintendo'},
  {title: 'Xbox' ,href: '/xbox'},
  {title: 'Игры' ,href: '/xbox'},
  {title: 'Рейтинг' ,href: '/xbox'},
  {title: 'Форум' ,href: '/xbox'},
];

export default class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="container">
          <Menu items={items} />
        </div>
      </header>
    )
  }
}