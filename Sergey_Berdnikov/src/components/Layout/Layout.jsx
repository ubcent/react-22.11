import './Layout.css';
//React импортируем в каждом файле
import React, { Component } from 'react';
//подключаем reactstrap
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';
//Подключаем свои компоненты
import MyNavbar from '../MyNavbar';
import Content from '../Content';

const navInstance = (
    <Nav vertical>
        <NavItem>
            <NavLink href="#">Link 1</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Link 2</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">Link 3</NavLink>
        </NavItem>
    </Nav>
);

export default class Layout extends Component
{
    render() {
        return (
            <div>
                <header>
                    <MyNavbar/>
                </header>
                <main>
                    <Container>
                        <Row>
                            <Col xs="8" sm="10">
                                <Content/>
                            </Col>
                            <Col xs="4" sm="2">
                                {navInstance}

                            </Col>
                        </Row>
                    </Container>
                </main>
                <footer>
                </footer>
            </div>
        );
    }
};