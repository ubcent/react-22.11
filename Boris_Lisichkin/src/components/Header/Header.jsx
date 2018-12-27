import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import ModalWindow from '../Login';
import './Header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <header>
                <Navbar className="container" dark expand="md">
                    <NavbarBrand href="/">MyCloud</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">News</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contacts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About</NavLink>
                            </NavItem>
                            <ModalWindow nav inNavbar />
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}