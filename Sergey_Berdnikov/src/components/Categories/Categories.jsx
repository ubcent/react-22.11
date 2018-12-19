import './Categories.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Row, Col } from "reactstrap/src";
import Container from "components/Layout/Layout";

export default class Categories extends Component
{
    static defaultProps = {};

    render() {
        return (
            <div className="Categories">
                <Card>
                    <CardHeader tag="h4">Side Widget</CardHeader>
                    <CardBody>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6">wewq</Col>
                                <Col xs="6" sm="6">wewq</Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
    }
};
    
