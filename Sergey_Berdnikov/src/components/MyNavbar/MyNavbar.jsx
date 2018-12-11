import './MyNavbar.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
//подключаем react-bootstrap компоненты
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

//Подключаем свои компоненты
import SignUp from '../SignUp';


export default class MyNavbar extends Component
{

    render() {
        return (
          <Navbar inverse collapseOnSelect>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="/">React-Bootstrap (Lesson3)</a>
                  </Navbar.Brand>
                  <Navbar.Toggle/>
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                      <NavItem eventKey={1} href="/">
                          Home
                      </NavItem>
                      <NavItem eventKey={2} href="/news">
                          News
                      </NavItem>

                      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                          <MenuItem eventKey={3.1}>About</MenuItem>
                          <MenuItem eventKey={3.2}>Another action</MenuItem>
                          <MenuItem eventKey={3.3}>Something else here</MenuItem>
                          <MenuItem divider/>
                          <MenuItem eventKey={3.3}>Separated link</MenuItem>
                      </NavDropdown>
                  </Nav>

                  <Navbar.Form pullRight>
                      <SignUp/>
                  </Navbar.Form>
              </Navbar.Collapse>
          </Navbar>
        );
    }
};