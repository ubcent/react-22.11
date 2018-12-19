import './Categories.css';

//React импортируем в каждом файле
import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

const leftLink = [
    {title: 'Web Design', href: '#'},
    {title: 'HTML', href: '#'},
    {title: 'Freebies', href: '#'},
];

const rightLink = [
    {title: 'JavaScript', href: '#'},
    {title: 'CSS', href: '#'},
    {title: 'Tutorials', href: '#'},
];

export default class Categories extends Component
{
    static defaultProps = {};

    render() {
        return (
            <div className="Categories">
                <Card>
                    <CardHeader tag="h5">Categories</CardHeader>
                    <CardBody>
                        <Container>
                            <Row>
                                <Col xs="6" sm="6">
                                    <ul className="categories__list">
                                        {leftLink.map(elem =>
                                            <li>
                                                <a href={elem.href}>{elem.title}</a>
                                            </li>
                                        )}
                                    </ul>

                                </Col>
                                <Col xs="6" sm="6">
                                    <ul className="categories__list">
                                        {rightLink.map(elem =>
                                            <li>
                                                <a href={elem.href}>{elem.title}</a>
                                            </li>
                                        )}
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </CardBody>
                </Card>
            </div>
        );
    }
};
    
