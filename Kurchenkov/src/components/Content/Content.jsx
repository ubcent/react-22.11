import './Content.css';
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Header from '../Header';

export default class Content extends Component {
    render() {
        return (
            <div class="content">
                <Header />
                <Container>
                    <Row>
                        <Col xs="3" className="leftMenu">
                            <Nav vertical>
                                <NavItem>
                                    <NavLink href="#">Favorite</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">Search</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#">All contacts</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col xs="1"></Col>
                        <Col xs="8">
                            <div class="chatBlock">
                                <div class="chat">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, impedit.</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    };
};
