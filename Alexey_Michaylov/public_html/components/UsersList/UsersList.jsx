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
import Main from 'components/Main';

export default class UsersList extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
    }

    handleSelectUser = (e) => {
        this.setState({
            user: e.target.dataset.id,
        });
    }

    render() {
        const { users } = this.props;
        const { user } = this.state;

        return (
            <Main head="Пользователи">
                <Row className="mb-4">
                    <Col xs="6" md="4">
                        <ListGroup>
                            {users.map((user, idx) => <ListGroupItem key={idx} data-id={idx} tag="button" onClick={this.handleSelectUser} action>{user.username}</ListGroupItem>)}
                        </ListGroup>
                    </Col>
                    <Col xs="6" md="8">
                        <Card inverse color="dark">
                            <CardHeader>{!user ? 'Select user' : users[user].username}</CardHeader>
                            {user &&
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
            </Main>
        )
    }

}
