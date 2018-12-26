import React, { PureComponent } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import ModalWindow from '../Login';
import './Header.css';

export default class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }
    toggle = () => {
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
                                <NavLink exact={true} to="/home" activeClassName="activeClass">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact={true} to="/blog" activeClassName="activeClass">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact={true} to="/comment" activeClassName="activeClass">Comments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact={true} to="/user" activeClassName="activeClass">Users</NavLink>
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