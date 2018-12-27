import React, {Component} from 'react';
import {Navbar, Container, NavbarBrand, Nav, NavItem, NavLink,} from 'reactstrap';

export default class Header extends Component {
    render() {
        const {items} = this.props;

        return (
            <header className="pt-5">
                <Navbar fixed="top" color="dark" dark expand="md">
                    <Container>
                        <NavbarBrand href="/">Start Bootstrap</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            {items.map((item, idx) =>
                                <NavItem key={idx}>
                                    <NavLink href={item.href}>{item.title}</NavLink>
                                </NavItem>
                            )}
                        </Nav>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
