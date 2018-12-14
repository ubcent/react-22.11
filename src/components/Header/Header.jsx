import './Header.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Menu from '../Menu';

const items = [
  { title: 'Home', href: '/' },
  { title: 'News', href: '/news' },
  { title: 'Blog', href: '/blog' },
]

export default class Header extends Component {
  static defaultProps = {
    size: 'big',
  }

  static propTypes = {
    size: PropTypes.oneOf(['some', 'big']).isRequired,
    color: PropTypes.string.isRequired
  }

  render() {
    const { size, color } = this.props;

    const headerClasses = classNames({
      header: true,
      'header-small': size === 'small',
      'header-big': size === 'big',
    });

    return (
      <header className={headerClasses}>
        <Menu items={items} />
      </header>
    )
  }
}