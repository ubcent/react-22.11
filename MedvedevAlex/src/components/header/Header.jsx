import './Header.css';

import React, {Component} from 'react';
import classNames from 'classnames';

import Menu from '../Menu';

const items = [
  {title: 'Home', href: '/'},
  {title: 'News', href: '/news'},
  {title: 'Blog', href: '/blog'},
];

const menuWrapper =  classNames({
  menuWrapper: true,
});

const headerNav =  classNames({
  headerNav: true,
});

export default class Header extends Component {
  static defaultProps = {size: 'big'};

  render() {
    const {size, color} = this.props;

    const headerClasses = classNames({
      header: true,
      'header-small': size === 'small',
      'header-big': size === 'big',
    });


    return (
      <header className={headerClasses}>
        <Menu items = {items} menuWrapper = {menuWrapper} headerNav = {headerNav}/>
      </header>
    )
  }
}