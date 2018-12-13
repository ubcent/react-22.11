import './Menu.css';
import React, {Component} from 'react';

import ModalAuthForm from '../ModalAuthForm';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Menu extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(){
    return(
      <div class="navBarMenu">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Главная</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/About">О нас</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/News">Новостной блог</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Video">Видео блог</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Contacts">Контакты</NavLink>
              </NavItem>
              <NavItem>
                <ModalAuthForm />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  };
};