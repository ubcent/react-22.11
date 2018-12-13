import './Layout.css';

import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';


import Cart from '../Cart';
import Menu from '../Menu';
import Header from '../Header';
import Footer from '../Footer';


export default class Layout extends Component {
    render() {

        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col xs="3">
                        <Menu />
                        </Col>
                        <Col>
                            <Col><Cart /></Col>
                            <Col><Cart /></Col>
                            <Col><Cart /></Col>
                            <Col><Cart /></Col>
                        </Col>
                        {/* <Col xs="3">.col-3</Col> */}
                    </Row>

                   
                </Container>
                <Footer />
            </div>
        )
    }
}