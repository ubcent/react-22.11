import React, { Component } from 'react';
import './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import ModalWindow from '../Login';

export default class Header extends Component {
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
            <header>
                <Navbar dark expand="md">
                    <NavbarBrand href="/">A-Cloud</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/news">News</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/blog">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contects">Contacts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">About</NavLink>
                            </NavItem>
                                <ModalWindow nav inNavbar />
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}