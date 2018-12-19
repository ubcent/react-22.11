import './Layout.css';
//React импортируем в каждом файле
import React, { Component } from 'react';
//подключаем reactstrap по частям, там меньше расходуется памяти
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";

//Подключаем свои компоненты
import Header from 'components/Header';
import Content from 'components/Content';
import MyContainer from 'components/Container';
import Counter from 'components/Counter';
import CommentsList from 'components/CommentsList';
import Search from "components/Search";
import Categories from "components/Categories";
import SideWidget from "components/SideWidget";

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
                            <Col xs="8" sm="8">
                                <Content/>
                            </Col>
                            <Col xs="4" sm="4">
                                <Search/>
                                <br/>
                                <Categories/>
                                <br/>
                                <SideWidget/>
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
