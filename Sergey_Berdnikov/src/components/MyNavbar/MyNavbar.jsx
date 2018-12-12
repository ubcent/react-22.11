import './MyNavbar.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
//Подключаем reactstrap
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

//Подключаем свои компоненты
import SignUp from '../SignUp';


export default class MyNavbar extends Component
{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">React-Bootstrap (Lesson3)</NavbarBrand>
                <NavbarToggler onClick={this.toggle}/>
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/news">News</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">About</NavLink>
                      </NavItem>
                        <NavItem>
                            <SignUp/>
                      </NavItem>
                  </Nav>
                </Collapse>
          </Navbar>
        );
    }
};

