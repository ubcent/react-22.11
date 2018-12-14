import './Menu.css';

import React, { Component } from 'react';

import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Menu extends Component {
  render() {
    return (
      <div>
        <p>Left Menu</p>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Link 1</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 2</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link 3</NavLink>
          </NavItem>
         </Nav>
        
      </div>
    );
  }
}