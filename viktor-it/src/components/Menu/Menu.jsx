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
  import {NavLink as NavLinkRRD} from 'react-router-dom';
  
export default class Menu extends PureComponent {
  render(){
    return(
      <div className="navBarMenu">
        <Navbar color="light" light expand="md">
          <NavLink id = "mainHref" to="/" tag={NavLinkRRD}>Главная</NavLink>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/AboutPage" tag={NavLinkRRD}>О нас</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/NewsPage" tag={NavLinkRRD}>Новостной блог</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/VideoPage" tag={NavLinkRRD}>Видео блог</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/ContactsPage" tag={NavLinkRRD}>Контакты</NavLink>
              </NavItem>
              <NavItem>
                <ModalAuthForm />
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    );
  };
};