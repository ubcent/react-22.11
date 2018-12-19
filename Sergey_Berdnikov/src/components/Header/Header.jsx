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

const navMenu = [
    {title: 'Home', href: '/'},
    {title: 'About', href: '/about'},
    {title: 'Services', href: '/sevices'},
    {title: 'Contact', href: '/contact'},

];

export default class Header extends Component
{
    static defaultProps = {};


    render() {
        return (
            <div className="Header">
                <Navbar color="dark" light expand="md">
                    <Container>
                        <NavbarBrand href="/">Start Bootstrap</NavbarBrand>
                        <NavbarToggler/>
                        <Collapse navbar>
                            <Nav className="ml-auto" navbar>
                                {navMenu.map(value => {
                                    return <NavItem><NavLink href={value.href}>{value.title}</NavLink>
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
    
