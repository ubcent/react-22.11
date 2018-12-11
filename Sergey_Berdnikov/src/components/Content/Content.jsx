import './Content.css';
//React импортируем в каждом файле
import React, { Component } from 'react';
//подключаем react-bootstrap компоненты
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

export default class Content extends Component
{
    render() {
        return (
        <Grid>
            <Row className="show-grid">
                <Col xs={6} md={4}>
                    <code>{'<Col xs={6} md={4} />'}</code>
                </Col>
                <Col xs={6} md={4}>
                    <code>{'<Col xs={6} md={4} />'}</code>
                </Col>
                <Col xsHidden md={4}>
                    <code>{'<Col xsHidden md={4} />'}</code>
                </Col>
            </Row>
        </Grid>
        );
    }
};

