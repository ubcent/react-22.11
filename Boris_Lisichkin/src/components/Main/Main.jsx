import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Slider from '../Slider';
import Sidebar from '../Sidebar';
import MediaObj from '../Media';

const news = [
    'Ullamco ullamco pariatur laboris sit enim incididunt.',
    'Consequat cillum consectetur dolor exercitation pariatur eu ex excepteur.',
    'Minim sint et enim pariatur incididunt exercitation excepteur dolore mollit tempor nisi ea.',

    'Labore culpa ea in in sint commodo exercitation elit incididunt reprehenderit commodo.',
    'Quis duis non non veniam est nisi duis voluptate pariatur eiusmod veniam ad et.',
    'Consectetur do aliquip voluptate eu eu. Do consequat esse nostrud qui magna id magna irure quis.',
]

const gridInstance = (
    <Row>
        <Col>
            <br />
            {news}
        </Col>
        <Col>
            <br />
            {news}
        </Col>
        <Col>
            <br />
            {news}
        </Col>
        <Col>
            <br />
            {news}
        </Col>
    </Row>
);

export default class Main extends Component {
    render() {
        return (
            <main>
                <Sidebar pageWrapId={"page-wrap"} />
                <Container>
                    <Row>
                        <Col><Slider /></Col>
                        <Col><MediaObj /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><MediaObj /></Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col><MediaObj /></Col>
                    </Row>
                    <hr />
                    {gridInstance}
                    <hr />
                </Container>
            </main>
        )
    }
}
