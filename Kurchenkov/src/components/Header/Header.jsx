import './Header.css';
import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle;
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header className="header">
                <div className="container">
                    <Navbar light expand="md">
                        <NavbarBrand href="/"><span className="item">Start</span></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/"><span className="item">Home</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/"><span className="item">Blog</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/"><span className="item">Comments</span></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/"><span className="item">Users</span></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        );
    };
};
