import './Layout.css';
//React импортируем в каждом файле
import React, { PureComponent } from 'react';
//подключаем reactstrap по частям, там меньше расходуется памяти
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';
import Container from 'reactstrap/lib/Container';

//Подключаем свои компоненты
import Search from 'components/Search';
import UsersContainer from 'containers/UsersContainer';
import SideWidget from 'components/SideWidget';
import PostsContainer from 'containers/PostsContainer';
import CommentsListContainer from 'containers/CommentsListContainer';


export default class Layout extends PureComponent
{
    render() {
        return (
            <div>

                <main>
                    <Container>
                        <Row>
                            <Col xs="8" sm="8">
                                <PostsContainer/>
                            </Col>
                            <Col xs="4" sm="4">
                                <Search/>
                                <UsersContainer/>
                                <SideWidget/>
                                <CommentsListContainer/>
                            </Col>
                        </Row>
                    </Container>
                </main>
                <footer>

                </footer>
            </div>
        );
    }
}

