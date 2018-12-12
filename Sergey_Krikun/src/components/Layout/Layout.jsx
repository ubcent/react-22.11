import './Layout.css';

import React, { Component } from 'react';
import Header from '../Header'
import classNames from 'classNames';

import Menu from '../Menu';


const items = [
  { title: 'Home', href: '/' },
  { title: 'Video', href: '/video' },
  { title: 'Gallery', href: '/gallery' }

]
export default class Layout extends Component {

  render() {

    return (
      <div className="layout_main_wrapper">
        <Header />
        <Menu place="left" items={items} />
      </div>
    );
  }
}
