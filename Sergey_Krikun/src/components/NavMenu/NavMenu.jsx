import './NavMenu.css';

import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';

export default class NavMenu extends Component {
  static defaultProps = {};

  render() {
    const { items } = this.props;
    return (
      <Nav className="NavMenu ml-auto" navbar>
        {items.map((item) =>
          <NavItem key={item.key}>
            <NavLink className="menu-item__link" href={item.href}>
              {item.title}
            </NavLink>
          </NavItem>
        )}
      </Nav>
    );
  }
}

NavMenu.propTypes = {
  /**
  * an array of objects with parameters for menu
  */
  items: PropTypes.array,
};
