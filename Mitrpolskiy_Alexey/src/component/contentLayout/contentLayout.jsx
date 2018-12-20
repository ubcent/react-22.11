import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends Component {
	render() {
		return (
			<Container>
				<Row>
					<Col>.col</Col>
				</Row>
				<Row>
					<Col>.col</Col>
					<Col>.col</Col>
					<Col>.col</Col>
					<Col>.col</Col>
				</Row>
				<Row>
					<Col>.col</Col>
					<Col>.col</Col>
					<Col>.col</Col>
					<Col>.col</Col>
				</Row>
			</Container>
		);
	}
}