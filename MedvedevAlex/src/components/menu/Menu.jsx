import './Menu.css';

import React, {Component} from 'react';

export default class Menu extends Component {

  render() {
    const { items } = this.props;
    const { menuWrapper } = this.props;
    const {headerNav} = this.props;
    return (
      <div className = {menuWrapper}>
        <ul className = {headerNav}>
          {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
        </ul>
      </div>
    )
  }
}