import './Header.css';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <header class="header">
                <Container>
                    <Row>
                        <Col xs="9">
                            <Nav>
                                <NavItem>
                                    <NavLink href="/">Main page</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Contacts</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Help</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs="3">
                            <div class="login">
                                <Button outline color="primary">Log In</Button>{' '}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        );
    };
};
