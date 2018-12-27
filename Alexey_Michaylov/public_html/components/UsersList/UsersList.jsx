import React, { PureComponent } from 'react';
import {
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

export default class UsersList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    handleSelectUser = (e) => {
        const target = e.target.dataset.id;
        this.setState({
            user: target,
        });
    }

    render() {
        const { users } = this.props;
        const { user } = this.state;

        return (
            <Row className="mb-4">
                <Col xs="6" md="4">
                    <ListGroup>
                        {users.map((user, idx) => <ListGroupItem key={idx} data-id={idx} tag="button" onClick={this.handleSelectUser} action>{user.username}</ListGroupItem>)}    
                    </ListGroup>
                </Col>
                <Col xs="6" md="8">
                    <Card inverse color="dark">
                        <CardHeader>{user === null ? 'Select user' : users[user].username}</CardHeader>
                        {user != null &&
                            <CardBody>
                                <CardTitle>{users[user].name}</CardTitle>
                                <CardText>
                                    {users[user].phone}<br />{users[user].email}
                                </CardText> 
                            </CardBody>
                        }  
                    </Card>
                </Col>
            </Row>
        )
    }
    
}
