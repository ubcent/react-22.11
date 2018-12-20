import React, {Component} from 'react';
import {Card, CardHeader, CardBody, Row, Col,} from 'reactstrap';

export default class Categories extends Component {
    render() {
        return (
            <Card className="mt-4">
                <CardHeader tag="h5">Categories</CardHeader>
                <CardBody>
                    <Row>
                        <Col xs="6">
                            <a href="#">Web Design</a><br/>
                            <a href="#">HTML</a><br/>
                            <a href="#">Freebies</a>
                        </Col>
                        <Col xs="6">
                            <a href="#">JavaScript</a><br/>
                            <a href="#">CSS</a><br/>
                            <a href="#">Tutorials</a>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        )
    }
}
