import './Layout.css';
//React импортируем в каждом файле
import React, { Component } from 'react';
//подключаем reactstrap по частям, там меньше расходуется памяти
import Nav from "reactstrap/lib/Nav";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import NavItem from "reactstrap/lib/NavItem";
import NavLink from "reactstrap/lib/NavLink";

//Подключаем свои компоненты
import Header from 'components/Header';
import Content from 'components/Content';
import MyContainer from 'components/Container';
import Counter from 'components/Counter';
import CommentsList from 'components/CommentsList';

const navMenu = [
    {title: 'Some link 1', href: '#'},
    {title: 'Some link 2', href: '#'},
    {title: 'Some link 3', href: '#'},
    {title: 'Some link 4', href: '#'},
    {title: 'Some link 5', href: '#'},
];

const navInstance = (
    <Nav vertical>
        {navMenu.map(value => {
            return <NavItem>
                <NavLink href={value.href}>{value.title}</NavLink>
            </NavItem>
        })}

    </Nav>
);

export default class Layout extends Component
{
    render() {
        return (
            <div>
                <header>
                    <Header/>
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
                    <MyContainer text={'text'}>
                        <pre>Hello world!</pre>
                        <Counter/>
                        <CommentsList>

                        </CommentsList>
                    </MyContainer>
                </footer>
            </div>
        );
    }
};
