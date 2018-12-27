import './Menu.css';
import React, {PureComponent} from 'react';
import ModalAuthForm from 'components/ModalAuthForm';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

export default class Menu extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  };

  toggle = ()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render(){
    return(
      <div className="navBarMenu">
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