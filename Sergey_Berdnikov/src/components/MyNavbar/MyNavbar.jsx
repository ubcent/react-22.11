import './MyNavbar.css';

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

//Подключаем свои компоненты
import SignUp from 'components/SignUp';

const navMenu = [
    {title: 'Home', href: '/'},
    {title: 'News', href: '/news'},
    {title: 'About', href: '/about'},
];

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
                        {navMenu.map(value => {
                            return <NavItem><NavLink href={value.href}>{value.title}</NavLink>
                            </NavItem>

                        })}
                        <NavItem>
                            <SignUp/>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
};

