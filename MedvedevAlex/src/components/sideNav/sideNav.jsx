import './SideNav.css';

import React, {Component} from 'react';

export default class SideNav extends Component {

  render() {
    const { items } = this.props;
    const { menuWrapper } = this.props;
    const {sideNav} = this.props;
    return (
      <div className = {menuWrapper}>
        <ul className = {sideNav}>
          {items.map((item) => <li><a href={item.href}>{item.title}</a></li>)}
        </ul>
      </div>
    )
  }
}