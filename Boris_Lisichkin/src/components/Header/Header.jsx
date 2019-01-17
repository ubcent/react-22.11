import React, { PureComponent } from 'react';
import { NavLink } from "react-router-dom";
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap';
import ModalWindow from '../Login';
import './Header.css';


export default class Header extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            exact: false,
        };
    }

    handleClick = (event) => {
        this.setState({ exact: !this.state.exact });
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
                                <NavLink exact to="/" onClick={this.handleClick} activeClassName="border-bottom border-danger">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/blog" onClick={this.handleClick} activeClassName="border-bottom border-danger">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/comment" onClick={this.handleClick} activeClassName="border-bottom border-danger">Comments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/user" onClick={this.handleClick} activeClassName="border-bottom border-danger">Users</NavLink>
                            </NavItem>
                            <ModalWindow nav inNavbar />
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}