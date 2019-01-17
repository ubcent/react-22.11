import './NavMenu.css';

import React, { PureComponent, Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

class NavMenu extends PureComponent {
  static defaultProps = {};

  getActive = (href) => {
    const { location } = this.props;

    const substr = location.pathname.substr(0, href.length);

    if (href.length === 1 && location.pathname.length !== 1) {
      return 'menu-item__link';
    }

    return substr === href ? 'menu-item__active menu-item__link'
      : 'menu-item__link';
  }

  render() {
    const { items, location } = this.props;

    return (
      <Nav className="NavMenu ml-auto" navbar>


        {items.map((item) =>
          <NavItem key={item.key}>
            <Link className={this.getActive(item.href)} to={item.href}>
              {item.title}
            </Link>
          </NavItem>
        )}
      </Nav>
    );
  }
}

export default withRouter(NavMenu);

NavMenu.propTypes = {
  /**
  * an array of objects with parameters for menu
  */
  items: PropTypes.array,
};
