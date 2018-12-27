import React from 'react';
import {Navbar, Container, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

export default function Header(props) {
    return (
        <header className="pt-5">
            <Navbar fixed="top" color="dark" dark expand="md">
                <Container>
                    <NavbarBrand href="/">ReactJS</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        {Object.keys(props.items).map((item, idx) =>
                            <NavItem key={idx}>
                                <NavLink onClick={props.newPage}
                                         data-name={item}
                                         active={props.items[item].active}
                                         href="#">{props.items[item].title}</NavLink>
                            </NavItem>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    );
}
