import './Header.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
//Подключаем reactstrap по частям, там меньше расходуется памяти
import Collapse from "reactstrap/lib/Collapse";
import Navbar from "reactstrap/lib/Navbar";
import NavbarToggler from "reactstrap/lib/NavbarToggler";
import Nav from "reactstrap/lib/Nav";
import NavItem from "reactstrap/lib/NavItem";
import NavLink from "reactstrap/lib/NavLink";
import NavbarBrand from "reactstrap/lib/NavbarBrand";
import Container from "reactstrap/lib/Container";

let navMenu = [
    {title: 'Home', href: '/', active: true},
    {title: 'About', href: '/', active: false},
    {title: 'Services', href: '/', active: false},
    {title: 'Contact', href: '/', active: false},

];

export default class Header extends Component
{
    static defaultProps = {};


    handleNavChange = () => {
        navMenu[this.target.key] = !this.target.active;
    };

    render() {
        return (
            <div className="Header">
                <Navbar color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">Start Bootstrap</NavbarBrand>
                        <NavbarToggler/>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                {navMenu.map((value, idx) => {
                                    return <NavItem><NavLink onClick={this.handleNavChange} key={idx}
                                                             active={value.active}
                                                             href={value.href}>{value.title}</NavLink>
                                    </NavItem>
                                })}
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
};
    
