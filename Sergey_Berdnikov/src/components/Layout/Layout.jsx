import './Layout.css';
//React импортируем в каждом файле
import React, { PureComponent } from 'react';
//подключаем reactstrap по частям, там меньше расходуется памяти
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";

//Подключаем свои компоненты
import Header from 'components/Header';
import Footer from 'components/Footer';
import Search from 'components/Search';
import Categories from 'components/Categories';
import SideWidget from 'components/SideWidget';
import BlogContainer from 'containers/BlogContainer';
import CommentsListContainer from 'containers/CommentsListContainer';


export default class Layout extends PureComponent
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
                                <BlogContainer/>
                            </Col>
                            <Col xs="4" sm="4">
                                <Search/>
                                <Categories/>
                                <SideWidget/>
                                <CommentsListContainer/>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <footer>
                    <Footer/>

                </footer>
            </div>
        );
    }
};
