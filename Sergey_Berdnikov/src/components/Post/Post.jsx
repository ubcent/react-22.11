import './Post.css';

//React импортируем в каждом файле
import React, { PureComponent } from 'react';

import { Card, Button, CardTitle, CardText, Col } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';


const TitleCard = (props) => {
    return (
        <Col sm="6">
            <Card body>
                <CardTitle>{props.title}</CardTitle>
                <CardText>{props.body}</CardText>
                <Button tag={RRNavLink} to="/">Go Back</Button>
            </Card>
        </Col>
    );
};

export default class Post extends PureComponent {

    render() {
        const { title, body } = this.props;

        return TitleCard(this.props);
    }
};
    
