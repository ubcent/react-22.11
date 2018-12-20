import React, {Component} from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import ModalLogIn from '../ModalLogIn';

export default class Menu extends Component {

    render() {
        return (
            <div className="menu">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Blog by Avetisyn</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/">Main</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Blogs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Contacts</NavLink>
                        </NavItem>
                        <NavItem>
                            <ModalLogIn buttonLabel='Log In'/>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}