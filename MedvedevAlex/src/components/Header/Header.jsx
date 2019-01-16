import './Header.css';

import React from 'react';

import Menu from 'components/Menu'
import Brand from 'components/Brand'

const items = [
  {title: 'Домашняя', href: '/'},
  {title: 'Рейтинг блогеров', href: '/rating'},
  {title: 'Стена', href: '/wall'},
];

export default function Header() {
  return (
    <header className="Header">
      <div className="container">
        <Brand/>
        <Menu items={items}/>
      </div>
    </header>
  )
}