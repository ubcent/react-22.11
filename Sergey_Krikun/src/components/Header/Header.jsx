import './Header.css';

import React, { PureComponent } from 'react';
import HeaderOverlay from 'components/HeaderOverlay';
import Blognavbar from 'components/Blognavbar';

export default class Header extends PureComponent {
  static defaultProps = {}

  render() {
    return (
      <div className="Header">
        <Blognavbar logoHref="/" logoString="My Blog" />
        <HeaderOverlay />
      </div>
    );
  }
}
