import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from '../Sidebar';

export default class Main extends Component {
    render() {
        return(
            <main>
                <Container>
                    <Row>
                        <Col xs="12" sm="9">Место для контента страницы</Col>
                        <Col xs="12" sm="3"><Sidebar /></Col>
                    </Row>
                </Container>
            </main>
        )
    }
}