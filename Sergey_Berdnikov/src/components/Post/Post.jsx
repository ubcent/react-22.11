import './Post.css';

//React импортируем в каждом файле
import React from 'react';

import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

export default function Post(props) {

    const { title, body } = props;

    return <Col sm="6">
        <Card body>
            <CardTitle>{title}</CardTitle>
            <CardText>{body}</CardText>
            <Button tag={RRNavLink} to="/">Go Back</Button>
        </Card>
    </Col>
};
    
